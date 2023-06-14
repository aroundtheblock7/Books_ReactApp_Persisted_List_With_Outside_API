import { useState } from 'react';

//onEdit prop passed all the way dowrn from App => BookList => BookShow => BookEdit
function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    //Remember whnever submitting on a form element we need to preventDefault()
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }


    //Anytime we have an input element we always need to keep track of that
    //input elements value with the state system [title, setTitle].
    //As always we need to dispaly 2 things with the input form... 
    //1.)title piece of state value={title} to show updated title being input by user
    //2.)an onChange prop that calls our "handleChange" which updates the title... setTitle(event.targe.value)
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;