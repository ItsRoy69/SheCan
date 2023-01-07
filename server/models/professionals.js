const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const professionalSchema = new mongoose.Schema({
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
  profession : {
    type : String,
    required: true,
    trim: true
  }
});

// Hashing Passwords

professionalSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      console.log(this.password);
    }
    next();
  });


  // Generating Auth Token

  professionalSchema.methods.generateAuthToken = async function () {
    try {
      let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
      return token;
    } catch (e) {
      console.log(`Failed to generate token --> ${e}`);
    }
  };


const Professional = mongoose.model("PROFESSIONAL", professionalSchema);
module.exports = Professional;