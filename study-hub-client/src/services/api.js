import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
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