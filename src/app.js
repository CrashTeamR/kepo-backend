const express = require("express");
const routes = require("./routes/routes.js");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.get("/", (req,res) => {
	res.send("helloWorld");
});

app.use("/api", routes);

app.listen(3000, () => {
	console.log("server is up");
});
