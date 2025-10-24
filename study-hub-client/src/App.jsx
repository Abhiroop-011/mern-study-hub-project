import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseListPage from './pages/CourseListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AddCoursePage from './pages/AddCoursePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<CourseListPage />} />
          <Route path="/courses" element={<CourseListPage />} />
          <Route path="/courses/new" element={<AddCoursePage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;