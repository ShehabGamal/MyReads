import React from 'react'
import { Link } from 'react-router-dom';
import Book from "../Components/Book"
import * as BooksAPI from '../BooksAPI'
import {useState} from 'react'



const SearchPage = ()=>{
    const [Query,setQuery] = useState("");
    const [SearchedBooksList,setSearchedBooksList]=useState([]);
    const updateQuery=(Query)=>{
      setQuery(Query)
      updateSearchedBooksList(Query);
    }
    const updateSearchedBooksList=(Query)=>{
      BooksAPI.search(Query).then(searchedBooks=>setSearchedBooksList(searchedBooks))
    }
    
  return(
        <div className="search-books">
             <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                      <input type="text" placeholder="Search by title or author"
                      value={Query}
                      onChange={e=>updateQuery(e.target.value)}
                      />
                    </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {SearchedBooksList.map(searchedBook=><li key={searchedBook.id}><Book book={searchedBook}/></li>)}
                </ol>
              </div>
        </div>
 );
}

export default SearchPage;