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
  }
};
