import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
  <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
    </>
  )
}

export default App
