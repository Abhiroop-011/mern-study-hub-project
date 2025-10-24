const express = require('express');
const router = express.Router({ mergeParams: true }); 
const {
  getNotesForCourse,
  createNoteForCourse,
} = require('../controllers/note.controller');

router.route('/')
  .get(getNotesForCourse)
  .post(createNoteForCourse);

module.exports = router;