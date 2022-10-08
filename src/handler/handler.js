const { default: mongoose } = require("mongoose");

const DB_NAME = process.env.DB_NAME;

const database = mongoose.model(
  DB_NAME,
  {
    username: String,
    title: String,
    content: String,
    comments: Array,
    createdAt: String,
  },
  "questions"
);

// Get all questions in database
async function getAllQuestionsHandler(req, res) {
  try {
    const response = await database.find();
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
}

// Insert data into database
async function postQuestionHandler(req, res) {
  const question = { ...req.body };

  try {
    const response = await database.create({
      ...question,
      createdAt: Date.now(),
    });

    res.status(200).json({ response });
  } catch (error) {
    res.json({ error });
  }
}

// Get one question by id
async function getQuestionByIdHandler(req, res) {
  try {
    const id = req.params.id;
    const response = await database.findById(id);

    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
}

// Delete question by id
async function deleteQuestionByIdHandler(req, res) {
  const id = req.params.id;

  try {
    const response = await database.findByIdAndDelete({ _id: id });
    console.log(response);

    if (!response) throw Error();

    res.status(200).json({ message: `Delete success` });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
}

module.exports = {
  getAllQuestionsHandler,
  postQuestionHandler,
  getQuestionByIdHandler,
  deleteQuestionByIdHandler,
};
