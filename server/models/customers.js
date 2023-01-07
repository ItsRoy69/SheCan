const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email.");
      }
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone : {
    type: String,
    required: true,
    trim: true,
    unique:true,
    minLength : 10
  },
});

// Hashing Passwords

customerSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      console.log(this.password);
    }
    next();
  });


  // Generating Auth Token

  customerSchema.methods.generateAuthToken = async function () {
    try {
      let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
      return token;
    } catch (e) {
      console.log(`Failed to generate token --> ${e}`);
    }
  };


const Customer = mongoose.model("CUSTOMER", customerSchema);
module.exports = Customer;