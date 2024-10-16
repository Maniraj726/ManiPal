
import React from 'react'
import './index.css'
import Header from "./components/Header";
import User from "./User";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/footer';
import Task from './components/Task';
import Appointment from './components/Appointment';



function App() {
  return (
    <div className='demo'>
      <Header />
      <Navbar />
      <Content />
      <Footer />
      <Task />
      <User />
      <Appointment />
    </div>
  )
}

export default App


