function Header({ bookCount }) {
  return (
    <header className="site-header">
      <h1>Your reading journey begins <span className="emphazied-font">here.</span></h1>
      <div className="header-bar"></div>
      <h2>Welcome to your reading library</h2>
      <div className="live-count">
        <span className="blink-circle"></span>
          <p>
            {bookCount} {bookCount === 1 ? 'book' : 'books'} in your library
          </p>
      </div> 
    </header>
  );
}

export default Header;