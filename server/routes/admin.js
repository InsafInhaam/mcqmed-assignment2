import express from "express";
import {
  createAdmin,
  deleteAdmin,
  editProfile,
  getAdmin,
  getAdminById,
  Login,
  updateAdmin,
} from "../controllers/admin.js";
import { authenticateToken } from "../middleware/requireLogin.js";

const router = express.Router();

router.post("/login", Login);
router.post("/createAdmin", createAdmin);
router.put("/updateAdmin/:id", authenticateToken, updateAdmin);
router.delete("/deleteAdmin/:id", authenticateToken, deleteAdmin);
router.get("/getAdmin", authenticateToken, getAdmin);
router.get("/getAdminById/:id", authenticateToken, getAdminById);
router.put("/editProfile", authenticateToken, editProfile);


export default router;
