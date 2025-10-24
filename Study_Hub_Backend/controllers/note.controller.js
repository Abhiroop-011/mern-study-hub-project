const Note = require('../models/note.model');
const Course = require('../models/course.model');

exports.getNotesForCourse = async (req, res, next) => {
  try {
    const notes = await Note.find({ course: req.params.courseId });

    res.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (err) {
    next(err);
  }
};

exports.createNoteForCourse = async (req, res, next) => {
  try {
    req.body.course = req.params.courseId;

    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    const note = await Note.create(req.body);

    res.status(201).json({ success: true, data: note });
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ success: false, error: 'Note not found' });
    }

    await note.deleteOne(); 

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};