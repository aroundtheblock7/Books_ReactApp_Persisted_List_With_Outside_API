import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }


    //Notice how our onClick does not call onDelete (being passed down) directly,
    //... instead we create a handleClick function that calls is. Why? Because
    //... we need to pass in (book.id) when calling it. It was the same when 
    //... we passed the onCreate function/prop from App to BookCreate. In BookCreate
    //... we had to create a handleSubmit that called onCreate prop becuase here we
    //... had to pass in the 'title'. So actually we created an onSubmit prop on the
    //... form that called handleSubmit...onSubmit={handleDeleteClick}... and then 
    //... handleDeleteClick calls onCreate passing in the title... OnCreate('title'). 
    return (
        <div className="book-show">
          <img 
            alt="books" 
            src={`https://picsum.photos/seed/${book.id}300/200`}
          />
          <div>{content}</div>
          <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit 
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
          </div>
        </div>

    )
}

export default BookShow;