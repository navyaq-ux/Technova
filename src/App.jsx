import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route element={<Layout/>}>
      
      <Route path='/' element={<HomePage/>}/>
      
      </Route>
    </Routes>
    
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App