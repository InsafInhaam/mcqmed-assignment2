import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import adminRouter from "./routes/admin.js";
import paymentRouter from './routes/payment.js';
import quizQuestionRouter from './routes/quiz.js';
import quizRouter from './routes/quizcat.js';

const PORT = 5000;

dotenv.config();
const app = express();

// (async () => {
//     await db.sync();
// })();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", adminRouter);
app.use("/api", paymentRouter);
app.use("/api", quizQuestionRouter);
app.use("/api", quizRouter);


app.listen(PORT, () => {
  console.log("listening on port", PORT);
});