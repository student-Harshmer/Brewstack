# ☕ Brewstack – Scalable Backend API with Authentication & Media Handling

**Brewstack** is a production-ready backend system built using **Node.js, Express, and MongoDB**, focused on scalability, clean architecture, and secure API design.

---

## 🚀 Features

- 🔐 JWT-based Authentication (Login/Register)
- 👤 User Management System
- 📁 File Upload & Media Handling (Multer / Cloudinary)
- 🧱 Scalable & Modular Folder Structure
- ⚡ RESTful API Design (CRUD Operations)
- 🛡️ Password Hashing with bcrypt
- 🍪 Cookie & Token Handling
- 🚫 Centralized Error Handling
- 🌍 Environment-based Configurations

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **File Upload:** Multer / Cloudinary
- **Security:** bcrypt, cookie-parser, dotenv

---

## 📂 Project Structure

```id="qz8d3p"
src/
│
├── controllers/      # Business logic
├── models/           # Database schemas
├── routes/           # API routes
├── middlewares/      # Custom middleware
├── utils/            # Helper functions
├── config/           # Configuration files
└── app.js            # Entry point
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```id="9dr2c4"
git clone https://github.com/student-Harshmer/Brewstack.git
```

2. Install dependencies:

```id="y3g8ke"
npm install
```

3. Create a `.env` file:

```id="1mn4j8"
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_config
```

4. Start the server:

```id="z0j1hx"
npm run dev
```

---

## 📡 API Endpoints (Sample)

### 🔐 Auth

- `POST /api/v1/users/register` → Register a new user
- `POST /api/v1/users/login` → Login user

### 👤 User

- `GET /api/v1/users/profile` → Get user profile
- `PUT /api/v1/users/update` → Update user details

### 📁 Media

- `POST /api/v1/upload` → Upload files

---

## 🧠 What I Learned

- Building scalable backend architecture
- Implementing secure authentication
- Handling media uploads efficiently
- Writing clean, modular code
- Structuring production-level APIs

---

## 🚀 Future Enhancements

- 🔄 Refresh Token Implementation
- 🔐 Role-Based Access Control (RBAC)
- 📘 Swagger API Documentation
- 🧪 Testing (Unit & Integration)
- 🐳 Docker Support

---

## 🤝 Contributing

Pull requests are welcome! Feel free to contribute.

---

## 📬 Connect With Me

- GitHub: https://github.com/harshmer-dev
- LinkedIn: https://linkedin.com/in/harsh-mer
- NPM: https://www.npmjs.com/~harshmer

---

## ⭐ Support

If you like Brewstack, give it a ⭐ on GitHub!
