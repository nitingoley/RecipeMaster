import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="block shadow rounded-xl overflow-hidden bg-white hover:shadow-lg transition"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{recipe.title}</h2>
        <p className="text-gray-500 text-sm mt-1">
          Ready in {recipe.readyInMinutes} mins
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
