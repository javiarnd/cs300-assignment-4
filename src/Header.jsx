function Header({ title, bookCount }) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      <p>
        {bookCount} {bookCount === 1 ? 'book' : 'books'} in your library
      </p>
    </header>
  );
}

export default Header;