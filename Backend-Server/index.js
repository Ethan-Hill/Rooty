require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
let cors = require('cors')
app.use(cors())


//Import Routes
const authRoute = require("./routes/auth");

//Connect to DB
mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to DB")
);


//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


//Route Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true")
  next();
});

app.use("/api/user", authRoute);

app.listen(4000, () => console.log("Up and running on http://localhost:4000"));
