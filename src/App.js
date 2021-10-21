import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from "./Components/SearchPage.js"
import MainPage from "./Components/MainPage.js"
import { Route } from 'react-router-dom'

const BooksApp = ()=>{
  
  
	
    return (
      <div className="app">
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/Search">
          <SearchPage />
        </Route>

      </div>
    )
  
}

export default BooksApp
