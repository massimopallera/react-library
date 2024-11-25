import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Contacts from './pages/Contacts'


function App() {

  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/books' element={<Books />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
