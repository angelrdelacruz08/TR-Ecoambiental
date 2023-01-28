import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter as Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Create from './pages/Create';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (


      <div>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Create' exact element={<Create/>} />
      </Routes>
      <Footer />
      </div>
       
  )
}

export default App
