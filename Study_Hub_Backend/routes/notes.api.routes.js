const express = require('express');
const router = express.Router();

const { deleteNote } = require('../controllers/note.controller');

router.route('/:id').delete(deleteNote);

module.exports = router;