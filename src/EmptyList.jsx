function EmptyList({ onAddClick }){
    return (
    <article className="empty-list">
        <h2>No books currently in your list</h2>
        <button type="button" onClick={onAddClick}>
            Click To Add More
        </button>
    </article>
    )
}

export default EmptyList;