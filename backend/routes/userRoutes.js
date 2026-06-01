import express from "express";

import {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  deleteUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

router.get("/", protect, adminOnly, getUsers);

router.get("/:id", protect, adminOnly, getUserById);

router.delete("/:id", protect, adminOnly, deleteUser);

export default router;