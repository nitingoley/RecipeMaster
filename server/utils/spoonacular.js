import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.SPOON_API_KEY;
const baseURL = "https://api.spoonacular.com/recipes"; 




console.log("🔐 Loaded API Key:", apiKey);

export const searchRecipesAPI = async (
  query = "pasta",
  diet,
  cuisine,
  mealType,
  time,
  includeIngredients
) => {
  const res = await axios.get(`${baseURL}/complexSearch`, {
    params: {
      query,
      diet,
      cuisine,
      type: mealType,
      maxReadyTime: time,
      includeIngredients,
      number: 10,
      apiKey,
    },
  });

  return res.data;
};

export const getRecipeDetailsAPI = async (id) => {
  const res = await axios.get(`${baseURL}/${id}/information`, {
    params: { apiKey },
  });
  return res.data;
};
