import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  preferences: {
    diet: { type: String, enum: ["vegetarian", "vegan", "gluten-free", "non-veg", "keto", ""], default: "" },
    allergies: { type: [String], default: [] },
    dislikedIngredients: { type: [String], default: [] },
    cookingSkillLevel: { type: String, enum: ["beginner", "intermediate", "expert"], default: "beginner" }
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
