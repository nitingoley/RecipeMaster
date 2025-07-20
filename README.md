# 🍽️ Recipe Management System

A full-stack MERN web application that allows users to search, view, and review recipes using the Spoonacular API. The app supports user authentication, dietary filtering, review submissions, and personalized recipe preferences.

## 🔗 Live Demo

> Coming soon...

---

## 🚀 Features

- 🔐 **User Authentication** (JWT + Secure Password Hashing)
- 🔍 **Recipe Search** via Spoonacular API
- 📖 **Detailed Recipe View**
- ⭐ **User Reviews & Ratings** per recipe
- 👤 **User Preferences** (diet, allergies, dislikes)
- 🎨 **Responsive UI** built with Tailwind CSS & React
- 🔒 **Protected Routes** for submitting reviews

---

## 🛠️ Tech Stack

| Layer       | Technology                  |
|------------|------------------------------|
| Frontend   | React, Tailwind CSS          |
| State Mgmt | Zustand (Auth Store)         |
| Backend    | Node.js, Express.js          |
| Database   | MongoDB with Mongoose        |
| Auth       | JWT + Bcrypt                 |
| API        | [Spoonacular API](https://spoonacular.com/food-api) |
| Deployment | (Coming soon: Vercel / Render / MongoDB Atlas) |

---

## 📁 Folder Structure

```bash
recipe-backend/
├── controllers/
│   ├── authController.js
│   ├── recipeController.js
│   └── reviewController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Review.js
├── routes/
│   ├── authRoutes.js
│   ├── recipeRoutes.js
│   └── reviewRoutes.js
├── utils/
│   └── spoonacular.js
├── .env
├── server.js
└── package.json
