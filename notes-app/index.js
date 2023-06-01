const NotesModel = require('./notesModel');
const NotesView = require('./NotesView')


let monday = new NotesModel;


const view = new NotesView(monday);
view.displayNotes();
