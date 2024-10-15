// hooksExercise.tsx
import React from 'react';
import { Note } from "./types"; // Import the Note type

// ToggleFavorites component to manage favorites
interface ToggleFavoritesProps {
  notes: Note[]; // Define the type for notes prop
  toggleFavorite: (noteId: number) => void; // Add the toggleFavorite prop
}

export function ToggleFavorites({ notes, toggleFavorite }: ToggleFavoritesProps) {
  return (
    <div>

      {/* List of Favorited Notes */}
      <div id="favoriteNotes">
        <h2>List of favorites:</h2>
        <ul>
          {notes.filter(note => note.isFavorite).map((favoriteNote) => (
            <li key={favoriteNote.id}>{favoriteNote.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
