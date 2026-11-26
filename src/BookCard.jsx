function BookCard({ book, onRemove, onToggleStatus }){
    return (
    <article className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.creator}
        <br></br>
         Genre: {book.category}
        <br></br>
         Minutes: {book.minutes}
        <br></br>
         Description: {book.description}
        <br></br>
         Current Status: {book.status}
      </p>
      <div className="card-button-container">
      <button type="button" onClick={() => onToggleStatus(book.id)}>
        {book.status === "To Read" ? "Mark as Read" : "Mark as To Read"}
      </button>
      <button type="button" onClick={() => onRemove(book.id)}>
        Remove
      </button>
      </div>
    </article>
    );
}

export default BookCard;