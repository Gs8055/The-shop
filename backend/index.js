import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/DB.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROOT ROUTE (FIX FOR 404)
app.get("/", (req, res) => {
  res.send("🚀 ShopZone API is running");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// DB Connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started at " + PORT);
});