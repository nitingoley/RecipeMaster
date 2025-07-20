import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import { useAuthStore } from "../store/authStore"; 
import Loading from "../components/Loading";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reloadReviews, setReloadReviews] = useState(false);
  const token = useAuthStore((state) => state.token);

  const fetchDetails = async () => {
    try {
      const res = await axios.get(`/recipes/${id}`);
      setRecipe(res.data);
    } catch (error) {
      alert("Something went wrong while fetching recipe details");
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (!recipe)  <Loading message="Fetching recipe details..." />;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <img
        src={recipe?.image}
        alt={recipe?.title}
        className="w-full rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{recipe?.title}</h1>
      <p className="text-gray-600 mb-4">
        Ready in {recipe?.readyInMinutes} minutes
      </p>

      {/* Instructions */}
      <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
      <p className="text-gray-700 whitespace-pre-line mb-6">
        {recipe?.instructions || "No instructions provided."}
      </p>

      {/* Review Section */}
      {token && (
        <ReviewForm
          recipeId={id}
          token={token}
          onReviewSubmitted={() => setReloadReviews(!reloadReviews)}
        />
      )}

      <ReviewList recipeId={id} reloadTrigger={reloadReviews} />
    </div>
  );
};

export default RecipeDetails;
