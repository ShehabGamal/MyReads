import React from 'react'
import Book from "../Components/Book"

const CurrentlyReading = ({BooksList,shelfChanger})=>{
    return(
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                    
                    {BooksList.filter(book=>book.shelf==="currentlyReading").map(
                      book=>(<li key={book.id}>
                      <Book book={book} shelfChanger={shelfChanger} />
                    </li>)
                    )}
                    
                  </ol>
                  </div>
                </div>
    );

}

export default CurrentlyReading