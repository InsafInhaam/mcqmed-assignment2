import express from "express";
import { deletePayment, getPayment, payment } from "../controllers/payment.js";
import { authenticateToken } from "../middleware/requireLogin.js";

const router = express.Router();

router.post("/payment", payment);
router.get("/getPayment", authenticateToken, getPayment);
router.get("/deletePayment", authenticateToken, deletePayment);

export default router;