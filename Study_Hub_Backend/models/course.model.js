const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    courseCode: {
      type: String,
      required: [true, 'Please add a course code'],
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Please add a course title'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);