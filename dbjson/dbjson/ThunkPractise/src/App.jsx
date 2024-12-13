import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Pages/Header'
import Form from './Pages/Form'
import View from './Pages/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
    <Header/>
    <Routes>
          <Route path='/Form' element={<Form/>}></Route>
          <Route path='/view' element={<View/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
