import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import AddUser from './components/AddUser'
import GetUsers from './components/GetUsers'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AddUser/>} />
        <Route path='/show' element={<GetUsers/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
