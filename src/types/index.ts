export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  savedCards: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  name: string;
  description: string;
  concepts: Concept[];
}

export interface Concept {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  subtopicId: string;
  createdAt: Date;
} 