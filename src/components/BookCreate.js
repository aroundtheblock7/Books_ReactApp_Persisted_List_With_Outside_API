import { useState }  from 'react';

    function BookCreate({ onCreate }) {
        const [title, setTitle] = useState('');

        const handleChange = (event) => {
            setTitle(event.target.value);
        };

        //We need to reset the user text in the input box to empty string
        const handleSubmit = (event) => {
            event.preventDefault();
            onCreate(title)
            setTitle('');
        };
    
    //With input elements we set the inputs value prop as well as its onChange prop....
    //which means it also needs a piece of state to keep track of what user inputs.
    //Form element takes the onSubmit (when user enters or clicks button) and...
    //calls OnCreate which is our prop being passed in from the App component
    return (
        <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>
        </div>
    )
}
export default BookCreate;