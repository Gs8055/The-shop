import express from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";
import { validateObjectId } from "../middleware/validateObjectId.js";

const router = express.Router();

// Public Routes
router.get("/", getProducts);

router.get("/:id", validateObjectId, getProductById);

// Admin Routes
router.post("/", protect, adminOnly, createProduct);

router.put(
  "/:id",
  protect,
  adminOnly,
  validateObjectId,
  updateProduct
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  validateObjectId,
  deleteProduct
);

export default router;