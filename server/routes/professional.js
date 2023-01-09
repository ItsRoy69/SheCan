const express = require("express");
const router = express.Router();
const Professional = require("../models/professionals");
const bcrypt = require("bcrypt");
const professionalAuth = require("../middleware/professionalAuth");

router.get("/", (req, res) => {
  res.json({ message: "This is the professionals api" });
});

router.post("/register", async (req, res) => {
  const { email, password, address, phone, name, profession } = req.body;

  if (!email || !password || !address || !phone || !name || !profession) {
    return res.status(422).json({ error: "Please fill all the fields." });
  }

  try {
    const userSearchByEmail = await Professional.findOne({ email: email });
    const userSearchByMobile = await Professional.findOne({ phone: phone });

    if (userSearchByEmail || userSearchByMobile) {
      return res.status(422).json({ error: "Professional already exists." });
    }

    const professional = new Professional({
      name,
      email,
      password,
      address,
      phone,
      profession,
    });

    const registered = await professional.save();

    const token = await registered.generateAuthToken();

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 60000000),
      httpOnly: true,
    });

    if (registered) {
      return res.status(201).json({
        message: "Registered Successfully!",
        token: token,
        professional: professional,
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

    const userEmail = await Professional.findOne({ email: logEmail });

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
          professional: userEmail,
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

router.get("/logout", professionalAuth, async (req, res) => {
  try {
    res.clearCookie("jwt", { path: "/" });
    res.status(200).send({ message: "logged out successfully!" });
    await req.rootUser.save();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/get-professional/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    if (!_id) {
      res.status(422).json({ message: "Please Provide Professional ID." });
    }
    const ProfessionalFound = await Professional.findById(_id);

    if (ProfessionalFound) {
      res.status(200).json({
        message: "Professional Found !",
        Professional: ProfessionalFound,
      });
    } else {
      res.status(404).json({ error: "Could Not Find Professional !" });
    }
  } catch (e) {
    res.status(500).json({ message: `Could not find Professional --> ${e}` });
  }
});

router.get("/get-professional-by-profession/:profession", async (req, res) => {
  const profession = req.params.profession;
  try {
    if (!profession) {
      res
        .status(422)
        .json({ message: "Please Provide the specific Profession." });
    }
    const ProfessionalFound = await Professional.find({
      profession: profession,
    });

    console.log(ProfessionalFound);

    if (ProfessionalFound.length > 0) {
      res.status(200).json({
        message: "Professional Found !",
        Professionals: ProfessionalFound,
      });
    } else {
      res.status(404).json({ error: "Could Not Find Professional !" });
    }
  } catch (e) {
    res.status(500).json({ message: `Could not find Professional --> ${e}` });
  }
});

router.delete("/remove-professional/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    if (!_id) {
      res.status(422).json({ message: "Please Provide Professional ID." });
    }
    const deleteProfessional = await Professional.findByIdAndDelete(_id);

    if (deleteProfessional) {
      res.status(200).json({ message: "Professional Deleted !" });
    } else {
      res.status(404).json({ error: "Could Not Find Professional !" });
    }
  } catch (e) {
    res.status(500).json({ message: `Could not find Professional --> ${e}` });
  }
});

module.exports = router;
