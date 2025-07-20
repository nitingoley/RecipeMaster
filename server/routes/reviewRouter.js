import express from "express";
import { submitReview, getReviews } from "../controllers/reviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Make sure this route exists:
router.post("/:id/reviews", protect, submitReview);
router.get("/:id/reviews", getReviews);

export default router;
