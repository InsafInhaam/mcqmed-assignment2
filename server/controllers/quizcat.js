import QuizCat from "../models/QuizCat.js";

// Create a new QuizCat
export const createQuizCat = async (req, res) => {
  const { quiz_title, description, author } = req.body;

  try {
    const quiz = await QuizCat.create({
      quiz_title,
      description,
      author,
    });
    res.status(201).json({ message: "QuizCat created successfully", quiz });
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Get all quizcat
export const GetQuizCat = async (req, res) => {
  const quiz = await QuizCat.findAll();

  try {
    res.status(201).json(quiz);
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Get a single quiz by id
export const GetQuizCatById = async (req, res) => {
  const quiz = await QuizCat.findAll({ where: { id: req.params.id } });

  try {
    res.status(201).json(quiz);
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Update a quiz by id
export const updateQuizCat = async (req, res) => {
  let updateData = req.body;

  const updateQuiz = await QuizCat.update(updateData, { where: { id: req.params.id } });

  try {
    res.status(201).json({message: "QuizCat updated successfully", updateQuiz});
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

// Delete a quiz by id
export const deleteQuizCat = async (req, res) => {
  try {
    const quiz = await QuizCat.findOne({ where: { id: req.params.id } });
    if (!quiz) {
      return res.status(422).json({ error: "QuizCat not found" });
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
