const { default: mongoose } = require("mongoose");

const DB_NAME = process.env.DB_NAME;

const database = mongoose.model(
  DB_NAME,
  {
    username: String,
    title: String,
    question: String,
  },
  "questions"
);

// Get all questions in database
async function getAllQuestionsHandler(req, res) {
  try {
    const response = await database.find();
    res.status(200).json({ message: "success", response });
  } catch (error) {
    console.log(error);
  }
}

// Insert data into database
async function postQuestionHandler(req, res) {
  const question = { ...req.body };

  await database.create(question);

  res.status(200).json({ message: "Success", question });
}

// Get one question by id
async function getQuestionByIdHandler(req, res) {
  try {
    const id = req.params.id;
    const response = await database.findById(id);

    res.status(200).json({ message: "success", response });
  } catch (error) {
    console.log(error);
  }
}

// Delete question by id
async function deleteQuestionByIdHandler(req, res) {
  try {
    const id = req.params.id;
    await database.findOneAndRemove(id);

    res.status(200).json({ message: "success delete" });
  } catch (error) {}
}

module.exports = {
  getAllQuestionsHandler,
  postQuestionHandler,
  getQuestionByIdHandler,
  deleteQuestionByIdHandler,
};
