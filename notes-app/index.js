const notesModel = require('./notesModel');
let monday = new notesModel;
monday.addNotes('Test note')
console.log('The notes app is running');
console.log(monday.getNotes());