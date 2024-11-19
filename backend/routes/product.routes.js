import express from "express";
import {
  getBestSellingProducts,
  getExploreProducts,
  getFlashSalesProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/best", getBestSellingProducts);
router.get("/flash", getFlashSalesProducts);
router.get("/explore", getExploreProducts);

export default router;
