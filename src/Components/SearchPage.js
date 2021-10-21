import React from 'react'


const SearchPage = ()=>{
    return(
 <div className="search-books" id="SearchPage">
    <div className="search-books-bar">
      <a className="close-search" href="#MainPage">Close</a>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author"/>

      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
 </div>
 );
}

export default SearchPage;