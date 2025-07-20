import express from "express";
import { getRecipeDetails, searchRecipes } from "../controllers/recipeController.js";
import { protect } from "../middleware/authMiddleware.js"; 

const router = express.Router();

router.get("/", protect, searchRecipes);
router.get("/:id", protect, getRecipeDetails);

export default router;