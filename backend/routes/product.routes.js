import express from "express";
import {
  getBestSellingProducts,
  getExploreProducts,
  getFlashSalesProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/:id", getProductById);
router.get("/best", getBestSellingProducts);
router.get("/flash", getFlashSalesProducts);
router.get("/explore", getExploreProducts);

export default router;
