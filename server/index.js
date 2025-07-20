import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRouter.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import reviewRoutes from "./routes/reviewRouter.js";


dotenv.config();

const app = express();
app.use(cors({
  origin: "https://recipe-master-flame.vercel.app",  
  credentials: true,  
}));
app.use(express.json());


// Routes

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/recipes", reviewRoutes);



// Connect DB & Start Server
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
  })
.catch(err => console.log(err));
