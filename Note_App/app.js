console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

var logNote = (note) => {
  console.log('--');
  console.log('Title: ' + note.title);
  console.log('Body: ' + note.body);
}

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note)
  {
    console.log("Note created");
    logNote(note);
  }else{
    console.log("A note with this title already exists");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  allNotes.forEach((note) => logNote(note))
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note)
  {
    logNote(note);
  }else{
    console.log("Note does not exist");
  }
} else if (command === 'remove') {
  var note_removed = notes.removeNote(argv.title);
  var message = note_removed ? "Note Removed": "No note found";
  console.log(message);
} else {
  console.log('Command not recognized');
}
