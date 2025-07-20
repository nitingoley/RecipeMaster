import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  recipeId: { type: String, required: true }, // Spoonacular ID
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, maxlength: 500 },
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
