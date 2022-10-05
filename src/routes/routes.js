const express = require("express");
const router = express.Router();

router.get("/questions", (req, res) => {
	res.status(200).json({ message: "Questions get"});
});

router.post("/questions", (req, res) => {
	res.status(200).json({message: "Success"});
});

router.post("/questions/:id", (req, res) => {
	res.status(200).json({message: "success"});
});

module.exports = router;
