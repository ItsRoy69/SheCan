const express = require("express");
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



app.listen(port, () => console.log("API IS RUNNING 🚀"));