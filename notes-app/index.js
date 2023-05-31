const notesModel = require('./notesModel');
let monday = new notesModel;
monday.addNotes('Burn chair')
console.log('The notes app is running');
console.log(monday.getNotes());