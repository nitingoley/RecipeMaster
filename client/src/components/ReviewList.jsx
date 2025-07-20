import { useEffect, useState } from "react";
import axios from "../utils/axios";

const ReviewList = ({ recipeId }) => {
  const [reviews, setReviews] = useState([]);
  const [avg, setAvg] = useState(null);

  const loadReviews = async () => {
    try {
      const res = await axios.get(`/recipes/${recipeId}/reviews`);
      setReviews(res.data.reviews || []);
      setAvg(res.data.averageRating);
    } catch (error) {
      console.error("Failed to load reviews:", error);
    }
  };

  useEffect(() => {
    loadReviews();
  }, [recipeId]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">
        Reviews {avg && `(Avg: ${avg}/5)`}
      </h3>

      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div className="border-b border-gray-200 py-4" key={review._id}>
            <p className="font-medium text-gray-800">
              {review?.userId?.name || "Anonymous"}
            </p>
            <p className="text-yellow-600">⭐ {review.rating}/5</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
