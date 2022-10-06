const express = require("express");
const routes = require("./src/routes/routes.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.DB_URI;

try {
  mongoose.connect(uri, () => {
    console.log("connected to database");
  });
} catch (error) {
  console.log(error);
}

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("helloWorld");
});

app.use("/api", routes);

app.listen(3000, () => {
  console.log("server is up");
});
