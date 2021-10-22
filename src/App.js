import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from "./Components/SearchPage.js"
import MainPage from "./Components/MainPage.js"
import { Route } from 'react-router-dom'
import {useState,useEffect} from 'react'





const BooksApp = ()=>{
 const [BooksList,setBooksList]=useState([]);
  useEffect(()=>{
    BooksAPI.getAll().then(data=>setBooksList(data))

  })
  const shelfChanger = (book,shelf)=>{
    BooksAPI.update(book,shelf)
} 
  
	
    return (
      <div className="app">
        <Route exact path="/">
          <MainPage BooksList={BooksList} shelfChanger={shelfChanger}/>
        </Route>
        <Route exact path="/Search">
          <SearchPage />
        </Route>

      </div>
    )
  
}

export default BooksApp
