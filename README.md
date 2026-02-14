MERN Stack To-Do App 🚀

This is my Task 3 project for the Maincrafts Technology Internship. I built a full-stack To-Do application where you can manage your daily tasks. It uses React for the UI and connects to a MongoDB database to save everything.

🌟 Key Features

Add Tasks: Click the plus button to add a new task.
View Tasks: All tasks are listed in cards with their titles and deadlines.
Edit Tasks: Click the Pencil icon to update a task's details.
Delete Tasks: Click the Trash icon to remove a task.
Cloud Storage: All data is stored in MongoDB Atlas.

🛠️ Tech Stack

Frontend: React (Vite), Axios, Lucide-React.
Backend: Node.js, Express.
Database: MongoDB Atlas using Mongoose.

📂 Project Structure

My project is divided into two main folders:

Backend

 server.js: The main entry point for the API.
 models/Task.js: Defines how the task data is stored in the database.
 .env: Stores my private MongoDB connection string.

 Frontend

 src/Add-Task/: Contains addTask.jsx, TaskModal.jsx, and addTask.module.css.
 src/Sidebar.jsx: The navigation sidebar component.
 App.jsx: Handles the main layout and routing.

 🔧 Installation & Setup

 1. Backend Setup

1. Open your terminal and go to the backend: cd backend
2. Install packages: npm install
3. Create a .env file and add your MONGO_URI.
4. Start the server: node server.js

 2. Frontend Setup

1. Open a new terminal and go to the frontend: cd frontend
2. Install packages: npm install
3. Start the app: npm run dev
4. Open http://localhost:5173 in your browser.


💡 What I Learned

During this project, I learned how to handle full CRUD operations (Create, Read, Update, Delete). I also learned how to fix common errors like 404 Not Found by adding proper backend routes and how to format dates correctly for HTML inputs.