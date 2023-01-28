import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import Index from './pages/index';
import Decreate from './pages/decreate';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (

      <div>
      <Header />
      <Routes>
        <Route path='/index' exact element={<Index />} />
        <Route path='/decreate' exact element={<Decreate />} />
      </Routes>
      <Footer />
      </div>
      
  )
}
export default App
