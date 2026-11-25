import { useState } from 'react';

function BookForm({ onAddBook }){
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const [category, setCategory] = useState('');
    const [minutes, setMinutes] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    function handleSubmit(event){
        event.preventDefault();

        const nextErrors = {};

        if (!title.trim()) {
            nextErrors.title = 'Enter a book title.';
        }

        if (!creator.trim()) {
            nextErrors.creator = 'Enter an author.';
        }

        const minutesRead = Number(minutes);
        if (!minutes.trim() || !Number.isInteger(minutesRead) || minutesRead <= 0) {
            nextErrors.minutes = 'Enter a valid number';
        }

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            return;
         }

    const newBook = {
        title: title.trim(),
        creator: creator.trim(),
        category: category.trim() || 'General',
        minutes: minutesRead,
        description: description.trim() || 'No description provided.',
        status: 'To Read'
    };

    onAddBook(newBook);

    setTitle('');
    setCreator('');
    setCategory('');
    setMinutes('');
    setDescription('');
    setErrors({});

    }

    return (
    <form className="book-form" onSubmit={handleSubmit} noValidate>
      <h2>Add a book to your reading list.</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      {errors.title && <p className="error">{errors.title}</p>}
      <br></br>
      <label htmlFor="creator">Author</label>
      <input
        id="creator"
        type="text"
        value={creator}
        onChange={(event) => setCreator(event.target.value)}
      />
      {errors.creator && <p className="error">{errors.creator}</p>}
      <br></br>
      <label htmlFor="category">Genre</label>
      <input
        id="category"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <br></br>
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        type="number"
        value={minutes}
        onChange={(event) => setMinutes(event.target.value)}
      />
      {errors.minutes && <p className="error">{errors.minutes}</p>}
      <br></br>
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br></br>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
