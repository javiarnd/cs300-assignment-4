import './styles.css';
import books from '../data/books.json';
import BookList from './BookList';
import { useState } from 'react';
import BookForm from './BookForm';

const initialBooks = books.map((book) => ({
  ...book,
  status: "To Read"
}));

export default function App() {

const [books, setBooks] = useState(initialBooks);

function handleRemoveBook(id) {
  setBooks(books.filter((book) => book.id !== id));
}

function handleToggleStatus(id) {
  setBooks(
    books.map((book) => book.id === id
        ? { ...book, status: book.status === "To Read" ? "Read" : "To Read" }
        : book
    )
  );
}

function getNextBookId(currentBooks) {
  const maxNumber = currentBooks.reduce((max, book) => {
    if (typeof book.id !== "string" || !book.id.startsWith("books-")) {
      return max;
    }

    const num = Number(book.id.slice("books-".length));
    if (!Number.isInteger(num) || num < 0) {
      return max;
    }

    return num > max ? num : max;
  }, 0);

  return `books-${String(maxNumber + 1).padStart(2, "0")}`;
}

function handleAddBook(newBook){
  const bookWithId = {
    ...newBook,
    id: getNextBookId(books),
  };
  setBooks([bookWithId, ...books]);
}



  return (
    <main>
      <h1>Your reading journey begins here</h1>
      <BookForm
        onAddBook={handleAddBook}
      />
      <BookList 
        books={books}
        onRemove={handleRemoveBook}
        onToggleStatus={handleToggleStatus} 
      />
    </main>
  );
}

