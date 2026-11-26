import { useState } from 'react';
import FormInput from './FormInput';

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
            nextErrors.minutes = 'Enter a valid number.';
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
        <FormInput id="title" label="Title" value={title} onChange={setTitle} error={errors.title} />
        <br></br>
        <FormInput id="creator" label="Author" value={creator} onChange={setCreator} error={errors.creator} />
        <br></br>
        <FormInput id="category" label="Genre" value={category} onChange={setCategory} />
        <br></br>
        <FormInput id="minutes" label="Minutes" type="number" value={minutes} onChange={setMinutes} error={errors.minutes} />
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
