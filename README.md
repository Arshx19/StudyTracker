# 📚 Study Tracker Backend

A backend API for a **Study Tracker & Gamified Learning App** that allows users to register, login securely, and track their learning progress.

---

## 🚀 Features

* 👤 User Registration (Signup)
* 🔐 Secure Login Authentication
* 🔑 JWT Token Generation
* 🔒 Password Hashing using bcrypt
* 📊 User Stats (hours, streak, points)
* 🗄 MongoDB Database Integration

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* JSON Web Token (JWT)

---

## 📂 Project Structure

```
studyTracker/
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── auth.js
│   │
│   ├── server.js
│   ├── package.json
│
├── .gitignore
└── README.md
```

---

## 🔐 API Endpoints

### 🟢 Register User

**POST** `/api/register`

**Request Body:**

```json
{
  "name": "Arsh",
  "email": "arsh@test.com",
  "password": "123456"
}
```

**Response:**

```
User Registered
```

---

### 🔵 Login User

**POST** `/api/login`

**Request Body:**

```json
{
  "email": "arsh@test.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "your_jwt_token_here"
}
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/study-tracker.git
```

---

### 2️⃣ Navigate to server

```bash
cd study-tracker/server
```

---

### 3️⃣ Install dependencies

```bash
npm install
```

---

### 4️⃣ Start server

```bash
npm start
```

---

## 🌐 Server Runs On

```
http://localhost:8080
```

---

## 🧠 Key Concepts Implemented

* REST API Design
* Authentication & Authorization
* Password Security (Hashing)
* Token-Based Authentication (JWT)
* MVC Folder Structure

---

## ⚠️ Environment Variables (Future Improvement)

Create a `.env` file for:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 🚀 Future Improvements

* 🧩 Protected Routes (JWT Middleware)
* 📅 Study Session Tracking
* 🏆 Gamification (points, streak system)
* 📈 Dashboard APIs
* 🎨 Frontend Integration (React)

---

## 👨‍💻 Author

**Arsh Jain**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
