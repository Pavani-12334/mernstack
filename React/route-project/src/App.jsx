import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'

const App = () => {
  return (
   <>
   <BrowserRouter>
        <Routes>
            
             <Route path='/' element={<Home/>}/>
             <Route path='/' element={<Products/>}/>
             <Route path='/' element={<Contact/>}/>

        </Routes>
   </BrowserRouter>
   </>
    
  )
}

export default App