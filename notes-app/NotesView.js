class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-note-button');
    this.buttonEl.addEventListener('click', () => {
       this.displayNotes();
    });
  }
  displayNotes() {
    document.querySelectorAll('div.note').forEach(note => {
      note.remove();
    });
    const message = document.querySelector('#note-input').value 
    this.model.addNotes(message)
    document.querySelector('#note-input').value = '';
    const notes = this.model.getNotes()

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}


module.exports = NotesView;