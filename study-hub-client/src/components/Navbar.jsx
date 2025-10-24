import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/courses" className="nav-link">
        All Courses
      </Link>
      <Link to="/courses/new" className="nav-link">
        Add Course
      </Link>
    </nav>
  );
}

export default Navbar;