import { Category } from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getAllProducts ${error.message}`);
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await Category.findOne({ name });

    if (category)
      return res.status(400).json({ error: "This category already exists" });

    const newCategory = new Category({ name });

    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getProductById ${error.message}`);
  }
};
