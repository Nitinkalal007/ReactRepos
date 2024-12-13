// import { useState } from 'react'
import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './Layout/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
