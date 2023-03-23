import express from "express";
import { createQuiz, deleteQuiz, GetQuiz, GetQuizByBelongId, GetQuizById, updateQuiz } from "../controllers/quiz.js";
import { authenticateToken } from "../middleware/requireLogin.js";

const router = express.Router();

router.post("/createQuiz", authenticateToken, createQuiz);
router.put("/updateQuiz/:id", authenticateToken, updateQuiz);
router.delete("/deleteQuiz/:id", authenticateToken, deleteQuiz);
router.get("/GetQuiz", authenticateToken, GetQuiz);
router.get("/GetQuizById/:id", authenticateToken, GetQuizById);
router.get("/GetQuizByBelongId/:id", authenticateToken, GetQuizByBelongId);




export default router;