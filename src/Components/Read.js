import React from 'react'
import Book from "../Components/Book"

const Read = ({BooksList,shelfChanger})=>{

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {BooksList.filter(book=>book.shelf==="read").map(
                  book=>(<li key={book.id}>
                  <Book book={book} shelfChanger={shelfChanger} currentShelf="read" />
                </li>)
                )}
                
              </ol>
            </div>
          </div>
    );
}

export default Read