'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema ({
  note: { type: String,  required: true },
  category: {  type: Array },
});

const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;