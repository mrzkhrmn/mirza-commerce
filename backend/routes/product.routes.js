import express from "express";
import {
  getBestSellingProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/best", getBestSellingProducts);

export default router;
