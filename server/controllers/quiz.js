import Quiz from "../models/Quiz.js";
import QuizCat from "../models/QuizCat.js";

// Create a new Quiz
export const createQuiz = async (req, res) => {
  const {
    question,
    answer1,
    answer2,
    answer3,
    answer4,
    correctAnswer,
    quizbelong,
  } = req.body;

  try {
    const quiz = await Quiz.create({
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      correctAnswer,
      quizbelong,
    });
    res.status(201).json({ message: "Quiz created successfully", quiz });
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Get all quizzes
export const GetQuiz = async (req, res) => {
  const quiz = await Quiz.findAll();

  try {
    res.status(201).json(quiz);
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Get a single quiz by id
export const GetQuizById = async (req, res) => {
  const quiz = await Quiz.findAll({
    where: { id: req.params.id },
  });

  try {
    res.status(201).json(quiz);
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Get a single quiz by id
export const GetQuizByBelongId = async (req, res) => {
  const quiz = await Quiz.findAll({
    where: { quizbelong: req.params.id },
    // include: [
    //   {
    //     model: QuizCat,
    //     attributes: ["id", "quiz_title", "description", "author"],
    //   },
    // ],
    // include: QuizCat
  });

  try {
    res.status(201).json(quiz);
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Update a quiz by id
export const updateQuiz = async (req, res) => {
  let updateData = req.body;

  const updateQuiz = await Quiz.update(updateData, {
    where: { id: req.params.id },
  });

  try {
    res.status(201).json({ message: "Quiz updated successfully", updateQuiz });
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Delete a quiz by id
export const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ where: { id: req.params.id } });
    if (!quiz) {
      return res.status(422).json({ error: "Quiz not found" });
    }
    await quiz.destroy();
    res.status(201).json({ message: "Successfully deleted" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the quiz" });
  }
};
