const jwt = require("jsonwebtoken");
const Customer = require("../models/customers.js");


const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await Customer.findOne({_id:verifyToken._id})

        if(!rootUser){
            throw new Error("Customer Not Found.");
        }

        req.token = token;
        req.rootUser = rootUser;

        next();

    } catch (error) {
        res.status(401).send("Unauthorized : No token provided");
        console.log(error);
    }
};

module.exports = auth;