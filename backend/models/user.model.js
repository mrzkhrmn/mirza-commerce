import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, unqiue: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
