const express = require("express");
const router = express.Router();
const Customer = require("../models/customers");
const bcrypt = require("bcrypt");
const customerAuth = require("../middleware/customerAuth");

router.get("/", (req, res) => {
  res.json({ message: "This is the customer api" });
});

router.post("/register", async (req, res) => {
  const { email, password, address, phone, name } = req.body;

  if (!email || !password || !address || !phone || !name) {
    return res.status(422).json({ error: "Please fill all the fields." });
  }

  try {
    const userSearchByEmail = await Customer.findOne({ email: email });
    const userSearchByMobile = await Customer.findOne({ phone: phone });

    if (userSearchByEmail || userSearchByMobile) {
      return res.status(422).json({ error: "Customer already exists." });
    }

    const customer = new Customer({
      name,
      email,
      password,
      address,
      phone,
    });

    const registered = await customer.save();

    const token = await registered.generateAuthToken();

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 60000000),
      httpOnly: true,
    });

    if (registered) {
      return res.status(201).json({
        message: "Registered Successfully!",
        token: token,
        customer: customer,
      });
    }
  } catch (e) {
    res.status(500).json({ message: `Could not create account! --> ${e}` });
  }
});

router.post("/login", async (req, res) => {
  try {
    const logEmail = req.body.email;
    const logPass = req.body.password;

    if (!logEmail || !logPass) {
      return res.status(422).json({ error: "Please fill all the fields." });
    }

    const userEmail = await Customer.findOne({ email: logEmail });

    if (userEmail) {
      const passCheck = await bcrypt.compare(logPass, userEmail.password);
      const token = await userEmail.generateAuthToken();

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000000),
        httpOnly: true,
      });

      if (passCheck) {
        res.status(201).json({
          message: "Logged In Successfully!",
          token: token,
          success: true,
          customer: userEmail,
        });
      } else {
        res.status(400).json({ message: "Invalid login credentials" });
      }
    } else {
      res.status(400).json({ message: "Invalid login credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Invalid login credentials" });
  }
});

router.get("/get-customer/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    if (!_id) {
      res.status(422).json({ message: "Please Provide Customer ID." });
    }
    const CustomerFound = await Customer.findById(_id);

    if (CustomerFound) {
      res
        .status(200)
        .json({ message: "Customer Found !", Customer: CustomerFound });
    } else {
      res.status(404).json({ error: "Could Not Find Customer !" });
    }
  } catch (e) {
    res.status(500).json({ message: `Could not find Customer --> ${e}` });
  }
});

router.get("/logout", customerAuth, async (req, res) => {
  try {
    res.clearCookie("jwt", { path: "/" });
    res.status(200).send({ message: "logged out successfully!" });
    await req.rootUser.save();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/remove-customer/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    if (!_id) {
      res.status(422).json({ message: "Please Provide Customer ID." });
    }
    const deleteCustomer = await Customer.findByIdAndDelete(_id);

    if (deleteCustomer) {
      res.status(200).json({ message: "Customer Deleted !" });
    } else {
      res.status(404).json({ error: "Could Not Find Customer !" });
    }
  } catch (e) {
    res.status(500).json({ message: `Could not find Customer --> ${e}` });
  }
});

router.get("/get-all-customers", async (req, res) => {
  try {
    const allCustomers = await Customer.find();

    if (allCustomers) {
      res
        .status(200)
        .json({ message: "All Customers Found !", Customers: allCustomers });
    } else {
      res.status(404).json({ error: "Could Not Find Customers !" });
    }
  } catch (e) {
    res.status(500).json({ message: `Could not find Customers --> ${e}` });
  }
});

module.exports = router;
