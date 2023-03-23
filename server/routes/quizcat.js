import express from "express";
import { authenticateToken } from "../middleware/requireLogin.js";
import { createQuizCat, deleteQuizCat, GetQuizCat, GetQuizCatById, updateQuizCat, } from '../controllers/quizcat.js';

const router = express.Router();

router.post("/createQuizCat", authenticateToken, createQuizCat);
router.put("/updateQuizCat/:id", authenticateToken, updateQuizCat);
router.delete("/deleteQuizCat/:id", authenticateToken, deleteQuizCat);
router.get("/GetQuizCat", authenticateToken, GetQuizCat);
router.get("/GetQuizCatById/:id", authenticateToken, GetQuizCatById);

export default router;