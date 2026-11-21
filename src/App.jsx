import './styles.css';
import books from '../data/books.json';
import BookList from './BookList';

const initialBooks = books.map((book) => ({
  ...book,
  status: "N/A"
}));

export default function App() {
  return (
    <main>
      <h1>Your application starts here</h1>
      <BookList books={initialBooks} />
    </main>
  );
}
