function EmptyList({ isFiltering, onAddClick }){
    if (isFiltering) {
        return (
            <article className="empty-list">
                <h2>No books match your search</h2>
                <p>Try a different title or author.</p>
            </article>
        );
    }
    
    return (
    <article className="empty-list">
        <h2>No books currently in your list</h2>
        <button type="button" onClick={onAddClick}>
            Add your first book
        </button>
    </article>
    )
}

export default EmptyList;