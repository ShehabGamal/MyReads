import React from 'react'
import Book from "../Components/Book"

const WantToRead = ({BooksList,shelfChanger})=>{
    
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              
                {BooksList.filter(book=>book.shelf==="wantToRead").map(
                  book=>(<li key={book.id}>
                  <Book book={book} shelfChanger={shelfChanger} currentShelf="wantToRead"/>
                </li>)
                )}
                
              </ol>
              
            </div>
          </div>
    );

}

export default WantToRead