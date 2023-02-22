import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';

import SearchScreen from './Components/SearchScreen/SearchScreen';


function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route  path='/' element={ <HomeScreen/>} >Home </Route>
        <Route  path='/Search' element={<SearchScreen/>} >Welcome to Search Page </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
