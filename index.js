'use strict';
// rewatch the 1st half to figure out local host vs connection

const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/notes';
//look up 

const Notes = require('./models/notes.schema.js');
const Category = require('./models/category.schema.js');

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

let args = process.argv.slice(2);

const dbOperations = async () => {
  if (args.length > 0) {
    let newNote = new Notes ({
      note: args[0],
    });

    try {
      await newNote.save();
    } catch (e) {
      console.error(e);
    }
  }
  let importCategory = await Category.find({ name: 'important'});

  let importCategoryId; 

  if (importCategory) importCategoryId = importCategory._id;

  let allNotes = await Notes.find();

  allNotes.forEach(val => {
    console.log(val.notes);
  });

  console.log(importCategoryId);

  mongoose.disconnect();

};

dbOperations();
