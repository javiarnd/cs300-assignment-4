import BookCard from './BookCard.jsx';
import EmptyList from './EmptyList.jsx';

function BookList({books, isFiltering, onRemove, onToggleStatus, onAddClick}) {
    if(books.length === 0){
        return <EmptyList isFiltering={isFiltering} onAddClick={onAddClick} />;
    }

    return (
        <div className="book-list">
         {books.map((book) => (
          <BookCard key={book.id} book={book} onRemove={onRemove} onToggleStatus={onToggleStatus} />
         ))}
        </div>
    );
}

export default BookList;