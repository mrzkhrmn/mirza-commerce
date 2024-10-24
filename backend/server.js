import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db/connectDB.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});

connectDB();
