import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});


export const getAllCourses = () => {
  return api.get('/courses');
};

export const getCourseById = (courseId) => {
  return api.get(`/courses/${courseId}`);
};

export const createCourse = (courseData) => {
  return api.post('/courses', courseData);
};


export const getNotesForCourse = (courseId) => {
  return api.get(`/courses/${courseId}/notes`);
};

export const createNoteForCourse = (courseId, noteData) => {
  return api.post(`/courses/${courseId}/notes`, noteData);
};

export const deleteNote = (noteId) => {
  return api.delete(`/notes/${noteId}`);
};