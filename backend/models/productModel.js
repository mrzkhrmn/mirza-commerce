import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0, min: 0, max: 100 },
    ratings: { type: Array, default: [] },
    stock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    images: {
      type: Array,
      default: [
        "https://smartdeal.com.bd/public/uploads/all/fJEan2GLy1k6cqlXLnwwvxIa47wHufc8bZDqY7RT.jpg",
      ],
    },
    attributes: {
      sizes: [
        {
          size: { type: String, required: true },
          stock: { type: Number, required: true },
        },
      ],
      colours: [String],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);