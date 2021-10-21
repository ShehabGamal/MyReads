import React from 'react'
import CurrentlyReading from "../Components/CurrentlyReading"
import WantToRead from "../Components/WantToRead"
import Read from "../Components/Read"

const MainPage = ()=>{
    
    return(
        <div className="list-books" id="MainPage">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <CurrentlyReading />
                  <WantToRead />
                  <Read />
              </div>
            </div>
            <div className="open-search">
              <a href="#SearchPage">Add a book</a>
            </div>
        </div>
    );
}

export default MainPage