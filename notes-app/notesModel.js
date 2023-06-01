class NotesModel {
  constructor() {
    this.list = [];
  }
  addNotes(item) {
    this.list.push(item);
  }

  getNotes() {
    return this.list
  }

  reset() {
    return this.list = [];
  }

}

module.exports = NotesModel;