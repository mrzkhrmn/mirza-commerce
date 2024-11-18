import { Product } from "../models/productModel.js";

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

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

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getBestSellingProducts ${error.message}`);
  }
};
