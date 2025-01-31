import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db/connectDB.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});

connectDB();
