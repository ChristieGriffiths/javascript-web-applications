const notesModel = require('./notesModel');

describe('notes capabilities', () => {
  it('return an empty list when first initialized', () => {
    const model = new notesModel();
    expect(model.getNotes()).toEqual([]);
  });
  it('return a list of 1 when 1 item added', () => {
    const model = new notesModel();
    model.addNotes('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  });
  it('return a list of 2 when 2 item added', () => {
    const model = new notesModel();
    model.addNotes('Buy milk');
    model.addNotes('Buy milk again');
    expect(model.getNotes()).toEqual(['Buy milk', 'Buy milk again']);
  });
  it('returns an empty list after using re-set method', () => {
    const model = new notesModel();
    model.addNotes('Buy milk');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});