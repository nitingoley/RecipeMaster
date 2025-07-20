import {
  searchRecipesAPI,
  getRecipeDetailsAPI,
} from "../utils/spoonacular.js";

/**
 * Controller to search for recipes using optional filters.
 * Supports: query, diet, cuisine, mealType, maxReadyTime, ingredients 
 * 
 * 
 * 
 */
export const searchRecipes = async (req, res) => {
  const { query, diet, cuisine, mealType, time, includeIngredients } = req.query;

  try {
    const data = await searchRecipesAPI(
      query,
      diet,
      cuisine,
      mealType,
      time,
      includeIngredients
    );

    res.status(200).json(data.results); // Return only the results array
  } catch (error) {
    console.error("Spoonacular Search Error:", error.message);
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};

/**
 * Controller to get full recipe details by ID.
 */
export const getRecipeDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await getRecipeDetailsAPI(id);
    res.status(200).json(data);
  } catch (error) {
    console.error("Spoonacular Detail Error:", error.message);
    res.status(500).json({ message: "Failed to get recipe" });
  }
};
