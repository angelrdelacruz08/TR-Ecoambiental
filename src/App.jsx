import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import Index from './pages';
import Create from './pages/Create';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (


      <div>
      <Header />
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/Create' element={<Create/>} />
      </Routes>
      <Footer />
      </div>
       
  )
}

export default App
