const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        // required:[true, "Name is required"]
    },
    profession:{
        type:String,
        trim:true,
        // required:[true, "Profession is required"]
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        // required:[true, "Email is required"]
    },
    password:{
        type:String,
        trim:true,
        // required:[true, "Password is required"]
    },
    phone:{
        type:Number,
        // min: 1000000000,
        // required:[true,"Phone no is required"]
    },
    address:{
        type:String,
        trim:true,
        // required:[true,"Address is required"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{timestamps:true});

// register
UserSchema.statics.register = async function (user){

    const {email,password} = user;
    // console.log(email,password);

    const emailExists = await this.findOne({email});

    if(emailExists){
        throw Error('Email already exists!');
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const securedUser = await this.create({...user,password:hash});
    // console.log(securedUser);
    
    return securedUser;
    
}

// login
UserSchema.statics.login = async function(user){
    const {email, password} = user;
    // console.log(email,password);

    const savedUser = await this.findOne({email});
    if(!savedUser){
        throw Error('Incorrect email');
    }
    const match = await bcrypt.compare(password, savedUser.password);

    if(!match){
        throw Error('Incorrect password');
    }
    return savedUser;
}

module.exports = mongoose.model('User', UserSchema);