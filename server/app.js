require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://shecan.vercel.app", //included origin as true
  credentials: true, //included credentials as true
};
const corsOptionsdev = {
  origin: "http://localhost:3000", //included origin as true
  credentials: true, //included credentials as true
};

{
  process.env.ENVIRONMENT === "development"
    ? app.use(cors(corsOptionsdev))
    : app.use(cors(corsOptions));
}
app.use(cors(corsOptionsdev));
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
require("./routes/startup/routes")(app);
const port = process.env.PORT || 8000;
require("./db/conn");
const connection = require("./db/conn");

connection();

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
