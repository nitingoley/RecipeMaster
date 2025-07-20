# 🍽️ Recipe Management System – Backend (MERN)

A secure, scalable backend API for personalized recipe management. Built with **Node.js**, **Express.js**, and **MongoDB**, it integrates the **Spoonacular API** for real-time recipe data. Users can discover, filter, and save recipes based on dietary preferences.

---

## 🚀 Features

- 🔒 User Registration & Login (JWT Authentication)
- 🔑 Secure Password Hashing (bcrypt)
- 🍲 Recipe Search & Filtering (Spoonacular API)
- 📋 Detailed Recipe Info (ingredients, steps, nutrition)
- 🛡️ Protected API Routes (authentication required)
- 🗂️ Scalable Project Structure (controllers, routes, middleware)

---

## 🛠️ Tech Stack

| Layer     | Technology                |
|-----------|---------------------------|
| Language  | JavaScript (ES6+)         |
| Runtime   | Node.js                   |
| Framework | Express.js                |
| Database  | MongoDB + Mongoose        |
| Auth      | JWT + bcryptjs            |
| API       | Spoonacular API           |
| Others    | Axios, dotenv, cors       |

---

## 📁 Project Structure

```
recipe-backend/
├── controllers/   # Business logic
├── middleware/    # Auth middleware
├── models/        # Mongoose schemas
├── routes/        # API route handlers
├── utils/         # External API utilities
├── .env           # Environment variables
├── server.js      # App entry point
└── package.json
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SPOON_API_KEY=your_spoonacular_api_key
```

---

## 📡 API Endpoints

### Auth

| Method | Endpoint              | Description                |
|--------|----------------------|----------------------------|
| POST   | /api/auth/register   | Register a new user        |
| POST   | /api/auth/login      | Login and receive JWT token|

### Recipes (Protected)

Use JWT token in Authorization header as `Bearer <token>`

| Method | Endpoint                                      | Description                       |
|--------|-----------------------------------------------|-----------------------------------|
| GET    | /api/recipes?query=pasta&diet=vegan           | Search recipes by keyword/filters |
| GET    | /api/recipes/:id                              | Get detailed info about a recipe  |

---

## 🏁 Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/recipe-backend.git
    cd recipe-backend
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Configure `.env` file** as shown above.
4. **Start the server:**
    ```bash
    nodemon server.js
    ```

---

## 🧪 Testing the API

Use tools like **Postman**, **Insomnia**, or **Thunder Client**.

- Register and login to obtain a token.
- Use the token to access `/api/recipes` endpoints.

---

## 🌱 Future Enhancements

- ⭐ Add Favorites & Saved Recipes (MongoDB)
- 📝 Allow users to submit custom recipes
- 🛒 Grocery list generator
- 📅 Weekly meal planner

---

## 📄 License

Licensed under the MIT License.

---

## 👤 Author

**Nitin Goley**  
[LinkedIn](#)  
📧 nitingoley42@gmail.com  
[GitHub](https://github.com/your-username/recipe-backend)

