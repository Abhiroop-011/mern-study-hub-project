import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../services/api';

function CourseListPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data.data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []); 

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="page-container">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.length === 0 ? (
          <p>No courses created yet. Go to "Add Course"!</p>
        ) : (
          courses.map((course) => (
            <Link key={course._id} to={`/courses/${course._id}`} className="course-card">
              <h3>{course.courseCode}</h3>
              <p>{course.title}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseListPage;