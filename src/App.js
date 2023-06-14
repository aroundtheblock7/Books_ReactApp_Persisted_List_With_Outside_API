import { useState, useEffect } from 'react';
import axios from "axios";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
     const [books, setBooks] = useState([]);

    
     const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
     };

    //We want fetchBooks to be called immediately when user goes to site which renders all the books to the screen.
    //Must utilize useEffect() here and remember there are 3 main options on how to use this. 
     useEffect(() => {
        fetchBooks();
     }, []);

     const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title: newTitle
        })
        
        console.log(response);

         const updatedBooks = books.map((book) => {
            if(book.id === id) {
               return { ...book, ...response.data }
            }
            return book;
        })
        setBooks(updatedBooks);
     }

     const deleteBookById = async (id) => {
      await axios.delete(`http://localhost:3001/books/${id}`);
      
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
     }
    
     //The 1st argument is where we are making the request. The 2nd argument is body of our text (title property passed in)
     const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: title
        })
        //console.log(response)
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
     };

    //Note with the BookList Component we don't need to create a funciton here in App
    //... to pass down books array, we can just set a prop to pass down {books} 
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;