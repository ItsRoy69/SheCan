const mongoose = require('mongoose');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (_id)=>{
    return jwt.sign(
        {_id},
        process.env.SECRET_KEY,
        {expiresIn:'2d'}
    );
}

const registerUser = async(req,res)=>{
    try{
        const newUser = await User.register(req.body);
        const jwtToken = createToken(newUser._id);
        res.status(201).json({message:'Registered successfully!',
        token: jwtToken});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}

const loginUser = async(req,res)=>{
    try {
        const savedUser = await User.login(req.body);
        const jwtToken =  createToken(savedUser._id);
        res.status(200).json({message:'Logged in successfully',token:jwtToken});   
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}

module.exports = {registerUser, loginUser};