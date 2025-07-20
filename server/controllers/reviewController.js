import Review from "../models/Review.js";

export const submitReview = async (req, res) => {
   console.log("➡️ Incoming review request:");
  console.log("Recipe ID:", req.params.id);
  console.log("User ID:", req.userId);
  console.log("Body:", req.body);
  try {
    const { rating, comment } = req.body;
    const { id: recipeId } = req.params;
    const userId = req.userId;

    const review = await Review.create({ recipeId, userId, rating, comment });
    res.status(201).json(review);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to submit review", error: err.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { id: recipeId } = req.params;
    const reviews = await Review.find({ recipeId }).populate("userId", "name");
    const averageRating = reviews.length
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : null;
    res.json({ averageRating, reviews });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch reviews", error: err.message });
  }
};
