// constants.ts
import { Label } from "./types";

export const dummyNotesList = [
  { id: 1, title: "Note 1", content: "This is note 1", label: Label.personal, isFavorite: false },
  { id: 2, title: "Note 2", content: "This is note 2", label: Label.study, isFavorite: false },
  // Add more notes as needed
];

export const dummyGroceryList = [
  { name: "Apples", isPurchased: false },
  { name: "Bananas", isPurchased: false },
]