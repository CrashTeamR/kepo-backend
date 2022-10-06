const express = require("express");
const router = express.Router();
const {
  getAllQuestionsHandler,
  postQuestionHandler,
  getQuestionByIdHandler,
  deleteQuestionByIdHandler,
} = require("../handler/handler");

router.get("/questions", getAllQuestionsHandler);

router.post("/questions", postQuestionHandler);

router.get("/questions/:id", getQuestionByIdHandler);

router.delete("/questions/:id", deleteQuestionByIdHandler);

module.exports = router;
