import mongoose from "mongoose";
import { Product } from "../models/productModel.js";
import { data } from "./data.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    //const conn = await mongoose
    //.connect(process.env.MONGO_URI)
    //.then(async () => {
    //await Product.insertMany(data);
    //console.log(`Data added to DB`);
    //});
    console.log(`Connected to MongoDB from: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};
