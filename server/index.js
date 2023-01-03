const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const app = express();
let port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.get("/", (req, res) => {
    res.send("HELLO FROM HOME");
});

app.use("/payment", require("./routes/Payment"));
app.use("/auth",require("./routes/Auth"));

const connectToDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI, { useUnifiedTopology:true, useNewUrlParser:true});
        console.log(`MongoDB is successfully connected @ ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectToDB();


app.listen(port, () => console.log("API IS RUNNING 🚀"));