export enum Label {
    personal = "personal",
    study = "study",
    work = "work",
    other = "other",
 }
 
 export interface Note {
    id: number;
    title: string;
    content: string;
    label: Label;
    isFavorite: boolean; // Add this line to include isFavorite
  }


export type GroceryItem = { name: string; isPurchased: boolean };

