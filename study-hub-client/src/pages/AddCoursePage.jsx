import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../services/api';

function AddCoursePage() {
  const [courseCode, setCourseCode] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!courseCode || !title) {
      setError('Both fields are required.');
      return;
    }

    try {
      const courseData = { courseCode, title };
      await createCourse(courseData);
      
      navigate('/courses');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create course');
    }
  };

  return (
    <div className="page-container">
      <h1>Add a New Course</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-group">
          <label htmlFor="courseCode">Course Code:</label>
          <input
            id="courseCode"
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Course Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Course</button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
}

export default AddCoursePage;