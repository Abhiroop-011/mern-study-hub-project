# Study Hub: A MERN Stack Application

Study Hub is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to help students organize their studies. It provides a platform where users can create courses and then add, view, and delete study notes associated with each course.

This project was built from scratch to demonstrate key MERN stack concepts, including:
* Building a complete RESTful API with Express & Mongoose.
* Creating a multi-page frontend with React and React Router.
* Handling complex state management with React hooks.
* Connecting related database models (Courses and Notes).
* Implementing full CRUD (Create, Read, Update, Delete) functionality.

<br>

## ✨ Key Features

* **Create Courses:** Add new courses with a course code and title.
* **View All Courses:** See a "card" view of all available courses.
* **View Course Details:** Click any course to see its details and all associated notes.
* **Add Notes:** A dedicated form on the course detail page to add new notes (title and content) for that specific course.
* **Delete Notes:** Securely delete individual notes with a confirmation prompt.
* **Responsive Design:** A professional, clean UI that works on all screen sizes.

<br>

## 📸 Screenshots

*(You should add your own screenshots here. Take a picture of the home page and the course detail page)*

| Course List Page | Course Detail Page |
| :---: | :---: |
|  |  |

<br>

## 🛠 Tech Stack

### Backend
* **Node.js:** JavaScript runtime environment
* **Express.js:** Web framework for Node.js
* **MongoDB:** NoSQL database
* **Mongoose:** Object Data Modeling (ODM) library for MongoDB
* **`dotenv`:** For managing environment variables
* **`cors`:** For enabling Cross-Origin Resource Sharing

### Frontend
* **React.js:** JavaScript library for building user interfaces
* **Vite:** Next-generation frontend tooling (bundler and dev server)
* **React Router (`react-router-dom`):** For client-side routing
* **Axios:** Promise-based HTTP client for making API requests

<br>

## 🚀 Getting Started: Local Setup

Follow these instructions to get a copy of the project running on your local machine for development and testing.

### Prerequisites

* **Node.js & npm:** [Download & Install Node.js](https://nodejs.org/)
* **MongoDB Atlas Account:** A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account to host your database.
* **Git:** To clone the repository.

---

### 1. Backend Setup (`study-hub-api`)

1.  **Clone the Repository** (if you haven't)
    ```bash
    git clone [https://your-repo-link.com/study-hub.git](https://your-repo-link.com/study-hub.git)
    cd study-hub
    ```

2.  **Navigate to the Backend Folder**
    ```bash
    cd study-hub-api
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

4.  **Create `.env` File**
    Create a file named `.env` in the `study-hub-api` root folder. Get your connection string from MongoDB Atlas and paste it here.
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@<clustername>.mongodb.net/studyhub?retryWrites=true&w=majority
    PORT=5000
    ```
    *(Remember to replace `<username>`, `<password>`, and `<clustername>`)*

5.  **Run the Backend Server**
    ```bash
    npm run dev
    ```
    The API server should now be running on `http://localhost:5000`.

---

### 2. Frontend Setup (`study-hub-client`)

1.  **Open a New Terminal**
    Keep your backend server running in the first terminal.

2.  **Navigate to the Frontend Folder**
    From the *root* `study-hub` directory:
    ```bash
    cd study-hub-client
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

4.  **Run the Frontend App**
    ```bash
    npm run dev
    ```
    The React app will open automatically in your browser, likely at `http://localhost:5173`.

You now have the full MERN application running locally!

<br>

## 🌐 API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/courses` | Get all courses |
| `POST` | `/api/courses` | Create a new course |
| `GET` | `/api/courses/:id` | Get a single course by its ID |
| `PUT` | `/api/courses/:id` | Update a course by its ID |
| `GET` | `/api/courses/:courseId/notes` | Get all notes for a specific course |
| `POST` | `/api/courses/:courseId/notes` | Create a new note for a specific course |
| `DELETE` | `/api/notes/:id` | Delete a single note by its ID |

<br>

## 🚢 Deployment

*(Here you would add links to your live, deployed application. You can use services like Vercel/Netlify for the React frontend and Render/Heroku for the Express backend.)*

* **Live Frontend (React):** `[Link to your Vercel/Netlify deployment]`
* **Live Backend (Express):** `[Link to your Render/Heroku deployment]`

**Note:** When deploying, you must update the `baseURL` in `study-hub-client/src/services/api.js` to point to your live backend URL, not `http://localhost:5000`. You also need to configure CORS on your backend to allow requests from your live frontend URL.

<br>

## 👤 Author

* **(Your Name / GitHub Username)**
* GitHub: `[https://github.com/Abhiroop-011]`

<br>

## 📄 License

This project is licensed under the MIT License.