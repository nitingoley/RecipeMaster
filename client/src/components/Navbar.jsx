import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

const Navbar = () => {
  const { user, logout, loadUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        🍽 RecipeMaster
      </Link>
      <div className="flex gap-4">
        {user ? (
          <>
            <span className="text-gray-700">Hi, {user.name}</span>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
