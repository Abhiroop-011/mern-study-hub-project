import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById, getNotesForCourse, createNoteForCourse, deleteNote } from '../services/api';

function CourseDetailPage() {
  const { courseId } = useParams(); 
  const [course, setCourse] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteError, setNoteError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [courseRes, notesRes] = await Promise.all([
        getCourseById(courseId),
        getNotesForCourse(courseId),
      ]);
      setCourse(courseRes.data.data);
      setNotes(notesRes.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [courseId]); 
  const handleNoteSubmit = async (e) => {
    e.preventDefault();
    setNoteError(null);
    try {
      const noteData = { title: noteTitle, content: noteContent };
      const response = await createNoteForCourse(courseId, noteData);
      
      setNotes([...notes, response.data.data]);
      
      setNoteTitle('');
      setNoteContent('');
    } catch (err) {
      setNoteError(err.response?.data?.error || 'Failed to add note');
    }
  };

 const handleDeleteNote = async (noteId) => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      await deleteNote(noteId);
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
 };

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className="page-container">
      <h1>{course.courseCode}: {course.title}</h1>
      <hr />

      {/* --- 3. ADD NOTE FORM (Styled) --- */}
      <form onSubmit={handleNoteSubmit} className="form-card">
        <h3>Add a New Note</h3>
        <div className="form-group">
          <label htmlFor="noteTitle">Title:</label>
          <input
            id="noteTitle"
            type="text"
            placeholder="Note Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="noteContent">Content:</label>
          <textarea
            id="noteContent"
            placeholder="Note Content"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Note</button>
        {noteError && <p className="error-text">{noteError}</p>}
      </form>

      <hr />

      {/* --- 4. NOTES LIST (Styled) --- */}
      <h2>Notes</h2>
      <div className="note-list">
        {notes.length === 0 ? (
          <p>No notes for this course yet. Be the first to add one!</p>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="note-card">
              <div className="note-header">
                <strong>{note.title}</strong>
                {/* 5. THE DELETE BUTTON */}
                <button 
                  onClick={() => handleDeleteNote(note._id)} 
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
              <p>{note.content}</p>
              <small>Created: {new Date(note.createdAt).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseDetailPage;