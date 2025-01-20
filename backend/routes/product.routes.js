import express from "express";
import {
  getAllProducts,
  getBestSellingProducts,
  getExploreProducts,
  getFlashSalesProducts,
  getProductById,
  getRelatedProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/product", getAllProducts);
router.get("/product/:id", getProductById);
router.get("/best", getBestSellingProducts);
router.get("/flash", getFlashSalesProducts);
router.get("/explore", getExploreProducts);
router.post("/related", getRelatedProducts);

export default router;
