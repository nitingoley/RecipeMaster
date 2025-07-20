import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRouter.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import reviewRoutes from "./routes/reviewRouter.js";


dotenv.config();

const app = express();

// List of allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173",
  "https://recipe-master-flame.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin like mobile apps or curl
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed from this origin"));
      }
    },
    credentials: true, // if you're using cookies or authorization
  })
);
app.use(express.json());


// Routes

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/recipes", reviewRoutes);

app.get("/", (req , res)=>{
res.json("Hello running server");
})



// Connect DB & Start Server
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
  })
.catch(err => console.log(err));
