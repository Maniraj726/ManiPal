import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'

import Gun from "./Pages/Gun";
import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
      <Header />
      <Navbar />
  
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/appointment" element={<Gun />} />
    </Routes>
    
  </StrictMode>
  </BrowserRouter>
)
