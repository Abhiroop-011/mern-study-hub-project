const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
} = require('../controllers/course.controller');

router.route('/')
  .get(getAllCourses)
  .post(createCourse);

router.route('/:id')
  .get(getCourseById)
  .put(updateCourse);

const noteRouter = require('./note.routes');
router.use('/:courseId/notes', noteRouter);

module.exports = router;