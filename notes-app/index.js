const NotesModel = require('./notesModel');
const NotesView = require('./NotesView')


let monday = new NotesModel;
monday.addNotes('Test note')

const view = new NotesView(monday);
view.displayNotes();
