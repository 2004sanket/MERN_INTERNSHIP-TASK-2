MERN To-Do List Application (Maincrafts Task 2)

This repository contains a MERN-stack To-Do List application developed for the Maincrafts Technology MERN Stack Internship. It demonstrates how to build a functional CRUD application where the frontend (React) communicates with a backend (Express/Node.js) and a cloud database (MongoDB Atlas).

🚀 Features

1.Task Management: Add new tasks via a custom modal and view them in a real-time list.
2.Modern UI: Built with a modular component structure including a Sidebar and Task Modals.
3.Persistent Storage: Integrated with MongoDB Atlas for cloud-based data management.
4.Environment Security: Uses dedicated environment variables to protect sensitive API keys.



🛠️ Tech Stack

1.Frontend: React (Vite), axios (API requests), lucide-react (Icons), react-router-dom (Navigation), CSS Modules.

2.Backend: Node.js, Express, mongoose (Database modeling), cors (Cross-origin sharing), dotenv (Environment config).

3.Database: MongoDB Atlas.



📂 Project Structure

Based on the current development environment:

Backend

models/: Mongoose schemas for task data.
server.js: Main entry point for the Express API.
 .env: Configuration for sensitive credentials (not tracked by Git).

Frontend

src/Add-Task/: Contains addTask.jsx and TaskModal.jsx.
src/Sidebar.jsx: Navigation and layout component. 
App.jsx & main.jsx: Core React logic and routing.



🔧 Installation and Setup
1. Clone the Repository


2. Database Setup (MongoDB Atlas)

1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a cluster and a database named todoDB.
3. Whitelist your IP address in Network Access.
4. Create a Database User and copy your Connection String.


3. Backend Configuration

1. Navigate to the backend folder:

cd backend
npm install


2. Create a .env file in the backend directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string_here




3. Start the server:

node server.js



4. Frontend Configuration

1. Navigate to the frontend folder:

cd ../frontend
npm install



2. Start the development server:

npm run dev

The app will typically run on http://localhost:5173 (Vite default).



🛡️ Important Note on Security

The .env file in the backend contains your private database credentials. It is already included in the .gitignore to ensure it is not uploaded to GitHub. When cloning this repo, you must create your own .env file as described in the setup steps above.