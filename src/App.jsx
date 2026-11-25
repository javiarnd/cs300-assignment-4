import './styles.css';
import books from '../data/books.json';
import BookList from './BookList';
import { useState } from 'react';
import BookForm from './BookForm';
import SearchFilter from './SearchFilter';
import Header from './Header';
import emptyData from '../data/empty.json';
import incompleteData from '../data/incomplete.json';
import boundaryData from '../data/boundary-records.json';

const sourceData = books;
//const sourceData = emptyData;       
//const sourceData = incompleteData;  
//const sourceData = boundaryData;    

function toTitleCase(text) {
  return text.trim().toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function cleanBook(book) {
  const minutes = Number(book.minutes);

  return {
    id: book.id,
    title: toTitleCase(String(book.title ?? '')) || 'Untitled Book',
    creator: toTitleCase(String(book.creator ?? '')) || 'Unknown author',
    category: toTitleCase(String(book.category ?? '')) || 'General',
    minutes: Number.isInteger(minutes) && minutes > 0 ? minutes : 'Unknown',
    description: String(book.description ?? '').trim() || 'No description provided.',
    status: 'To Read',
  };
}

const initialBooks = sourceData.map(cleanBook);

export default function App() {

const [books, setBooks] = useState(initialBooks);
const [searchText, setSearchText] = useState('');

const search = searchText.trim().toLowerCase();
  const visibleBooks = books.filter((book) =>
    (book.title || '').toLowerCase().includes(search) ||
    (book.creator || '').toLowerCase().includes(search)
  );

function handleFocusForm() {
  document.getElementById('title').focus();
}

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
  const bookWithId = cleanBook({  //runs through clean book, but will clean things like iPhone and McDonald
    ...newBook,
    id: getNextBookId(books),
  });
  setBooks([bookWithId, ...books]);
}



  return (
    <main>
      <Header bookCount={books.length} />
      <BookForm
        onAddBook={handleAddBook}
      />
      <SearchFilter
      searchText={searchText} onSearchChange={setSearchText} 
      />
      <BookList 
        books={visibleBooks}
        isFiltering={search !== ''}
        onRemove={handleRemoveBook}
        onToggleStatus={handleToggleStatus} 
        onAddClick={handleFocusForm}
      />
    </main>
  );
}

