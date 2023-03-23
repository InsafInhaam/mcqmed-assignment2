import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "You must be logged in" });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECERT_KEY, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" });
    }

    const userdata = await Admin.findByPk(payload.id);
    if (!userdata) {
      return res.status(401).json({ error: "Admin not found" });
    }

    req.user = userdata;
    next();
  });
};