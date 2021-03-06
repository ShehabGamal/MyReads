import React from 'react'


const Book = ({book,shelfChanger,currentShelf})=>{
    
  const Thumbnail = book.imageLinks?book.imageLinks.thumbnail:"";
  const Author = book.authors?book.authors:"";
    return(
        <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${Thumbnail}")` }}></div>
              <div className="book-shelf-changer">
                <select onChange={(e)=>shelfChanger(book,e.target.value)} value={currentShelf}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{Author}</div>
          </div>
    );

}

export default Book