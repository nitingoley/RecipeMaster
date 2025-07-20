import { useState } from "react";
import axios from "../utils/axios";

const ReviewForm = ({ recipeId, token, onReviewSubmitted }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `/recipes/${recipeId}/reviews`,
        { rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRating(5);
      setComment("");
      onReviewSubmitted();
    } catch (error) {
      console.error("❌ Failed to submit review:", error);
      alert("Failed to submit your review");
    }
  };

  return (
    <form onSubmit={submitReview} className="my-6 bg-gray-100 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Leave a Review</h3>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 w-full rounded mb-4"
        required
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 w-full rounded mb-4"
        placeholder="Write your comment"
        required
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
