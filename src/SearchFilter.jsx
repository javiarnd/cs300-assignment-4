function SearchFilter({ searchText, onSearchChange }) {
  return (
    <div className="search-filter">
      <label htmlFor="search">Search by title or author 🔎</label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchFilter;