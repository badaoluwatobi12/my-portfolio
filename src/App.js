import React from 'react'
import './home.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './home'


function App() {
  return (
    <React.Fragment>
    <Routes>
       <Route path='/home' element={<Home/>} />
    </Routes>
</React.Fragment>

  )
}

export default App