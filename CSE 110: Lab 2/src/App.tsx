import './App.css';
import { Label, Note } from "./types"; 
import { dummyNotesList } from "./constants"; 
import { ToggleFavorites } from "./hooksExercise";
import React, { useState } from 'react'; 

function App() {
  const [notes, setNotes] = useState(dummyNotesList); 
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
    isFavorite: false, 
  };
  const [createNote, setCreateNote] = useState(initialNote);
  const [selectedNote, setSelectedNote] = useState<Note>(initialNote); 
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    createNote.id = notes.length + 1;
    createNote.isFavorite = false; 
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };

  const handleEdit = (note: Note) => {
    setSelectedNote(note);
  };

  const handleSave = (note: Note) => {
    const updatedNotes = notes.map(n => n.id === note.id ? note : n);
    setNotes(updatedNotes);
    setSelectedNote(initialNote); 
  };

  const handleBlur = () => {
    if (selectedNote.title || selectedNote.content || selectedNote.label) {
      handleSave(selectedNote);
    }
  };

  const toggleFavorite = (noteId: number) => {
    const updatedNotes = notes.map(note => 
      note.id === noteId ? { ...note, isFavorite: !note.isFavorite } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (noteId: number) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark", !isDarkMode); 
  };

  return (
    <div className='app-container'>
      <h3>Lab 3 for CSE 110 by Haesol Jung</h3>
      <button onClick={toggleMode}>Switch mode</button>
      <form className="note-form" onSubmit={createNoteHandler}>
        <div>
          <input
            placeholder="Note Title"
            onChange={(event) =>
              setCreateNote({ ...createNote, title: event.target.value })}
            required>
          </input>
        </div>
  
        <div>
          <textarea
            onChange={(event) =>
              setCreateNote({ ...createNote, content: event.target.value })}
            required>
          </textarea>
        </div>
  
        <div>
          <select
            onChange={(event) =>
              setCreateNote({ ...createNote, label: event.target.value as Label })}
            required>
            <option value={Label.personal}>Personal</option>
            <option value={Label.study}>Study</option>
            <option value={Label.work}>Work</option>
            <option value={Label.other}>Other</option>
          </select>
        </div>
  
        <div><button type="submit">Create Note</button></div>
      </form>
  
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setSelectedNote({ ...note, title: e.currentTarget.textContent || "" })}
              onClick={() => handleEdit(note)}
            >
              {note.title}
            </h2>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setSelectedNote({ ...note, content: e.currentTarget.textContent || "" })}
              onClick={() => handleEdit(note)}
            >
              {note.content}
            </p>
            <select
              value={selectedNote.label}
              onChange={(event) => setSelectedNote({ ...note, label: event.target.value as Label })}
              onBlur={handleBlur}
              onClick={() => handleEdit(note)}
            >
              <option value={Label.personal}>Personal</option>
              <option value={Label.study}>Study</option>
              <option value={Label.work}>Work</option>
              <option value={Label.other}>Other</option>
            </select>

            {}
            <button onClick={() => toggleFavorite(note.id)}>
              {note.isFavorite ? "💖" : "🤍"} {}
            </button>

            {}
            <button onClick={() => deleteNote(note.id)} style={{ marginLeft: '10px', color: 'red' }}>
              X {}
            </button>
          </div>
        ))}
        <ToggleFavorites notes={notes} toggleFavorite={toggleFavorite} />
      </div>
    </div>
  );
}

export default App;
