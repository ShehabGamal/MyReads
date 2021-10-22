import React from 'react'
import CurrentlyReading from "../Components/CurrentlyReading"
import WantToRead from "../Components/WantToRead"
import Read from "../Components/Read"
import { Link } from 'react-router-dom'

const MainPage = ({BooksList, shelfChanger})=>{
    
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <CurrentlyReading BooksList={BooksList} shelfChanger={shelfChanger}/>
                  <WantToRead BooksList={BooksList} shelfChanger={shelfChanger}/>
                  <Read  BooksList={BooksList} shelfChanger={shelfChanger}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/Search">Add a book</Link>
            </div>
        </div>
    );
}

export default MainPage