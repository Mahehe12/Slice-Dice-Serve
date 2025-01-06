# **Slice, Dice, Serve 🔪👨‍🍳🍽️**

A full-stack recipe management application built with TypeScript, React, Node.js, and PostgreSQL.

## 🚀 Learning Journey

This project represents my journey learning:
- TypeScript with React
- PostgreSQL database management
- RESTful API development
- Full-stack application architecture

## 💻 Tech Stack

### **Frontend:**
- React with TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### **Backend:**
- Node.js
- Express
- PostgreSQL
- `pg` (node-postgres)

---

## 🔥 Features

- Create, read, update, and delete recipes
- Responsive design
- Form validation
- Modal confirmations
- RESTful API integration

---

## 🛠️ Installation

### Clone the repository
```bash
git clone https://github.com/Mahehe12/Slice-Dice-Serve.git
cd Slice-Dice-Serve
```

### Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend 
cd frontend
npm install
```
### Set up PostgreSQL database
```SQL
CREATE DATABASE recipes_db;
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
);
```

### Configure environment variables
```.env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=recipes_db
DB_PASS=yourpassword
DB_PORT=5432 
```

### Start the servers
```bash
node main.js

npm run dev
```
## ** 🎨 Preview **

### Homepage
![Screenshot 2025-01-06 230542](https://github.com/user-attachments/assets/d537ff5e-a017-4c44-9503-95f51db22848)

### Add Recipe Form
![Screenshot 2025-01-06 230815](https://github.com/user-attachments/assets/be0cb5d1-72d9-4698-af4a-fc082f13dca6)

### Edit Recipe Page
![Screenshot 2025-01-06 230859](https://github.com/user-attachments/assets/e5eeeac2-a009-4af9-bc60-8f718ec68478)

### Delete Modal Confirmation
![Screenshot 2025-01-06 230930](https://github.com/user-attachments/assets/a11e39a7-79f3-430f-8e61-07dac08f5ed5)





