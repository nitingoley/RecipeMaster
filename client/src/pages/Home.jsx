import { useEffect, useState } from "react";
import axios from "../utils/axios";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const fetchRecipes = async () => {
    try {
      const res = await axios.get(`/recipes?query=${query}`);
      setRecipes(res.data);

    console.log("Fetched recipes:", res.data);
    
    } catch (error) {
      alert("Error fetching recipes");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchRecipes();
        }}
        className="mb-6 flex gap-2"
      >
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
