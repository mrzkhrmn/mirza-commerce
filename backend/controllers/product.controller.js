import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getAllProducts ${error.message}`);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("category", "name");

    if (product === null)
      return res.status(404).json({ message: "Product not found!" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getProductById ${error.message}`);
  }
};

export const getBestSellingProducts = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $addFields: { averageRating: { $avg: "ratings" } },
      },
      { $sort: { averageRating: -1 } },
      { $limit: 4 },
    ]);

    if (products === null)
      return res.status(404).json({ message: "Product not found!" });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getBestSellingProducts ${error.message}`);
  }
};

export const getFlashSalesProducts = async (req, res) => {
  try {
    const products = await Product.find({ discountPercentage: { $gt: 0 } })
      .sort({ price: 1 })
      .limit(7);

    if (products === null)
      return res.status(404).json({ message: "Product not found!" });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getFlashSalesProducts ${error.message}`);
  }
};

export const getExploreProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).limit(8);

    if (products === null)
      return res.status(404).json({ message: "Product not found!" });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getBestSellingProducts ${error.message}`);
  }
};

export const getRelatedProducts = async (req, res) => {
  try {
    const { categories } = req.body;
    const products = await Product.find({
      category: { $in: categories },
    }).limit(4);

    if (products === null)
      return res.status(404).json({ message: "Product not found!" });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getRelatedProducts ${error.message}`);
  }
};
