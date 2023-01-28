import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Create from './pages/create';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (

      <div>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/create' exact element={<Create />} />
      </Routes>
      <Footer />
      </div>
      
  )
}
export default App
