const express = require("express");
const routes = require("./src/routes/routes.js");
const { v4 } = require("uuid");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const uri = process.env.DB_URI;

try {
  mongoose.connect(uri, () => {
    console.log("connected to database");
  });
} catch (error) {
  console.log(error);
}

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("helloWorld");
});

app.use("/api", routes);

module.exports = app;
