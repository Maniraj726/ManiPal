import React from 'react'
import './index.css'
import Header from "./components/Header";
import User from "./User";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Task from './components/Task';
import Appointment from './components/Appointment';
// import Gun from "./Pages/Gun";
// import Home from "./Pages/Home";
// import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  return (
    <div className='demo'>
  
      <Content />
      <Footer />
      <Task />
      {/* <Appointment /> */}
      {/* <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment" element={<Gun />} />
      </Routes>
    </BrowserRouter>
       */}
    </div>
  )
}

export default App



// import Gun from "./Pages/Gun";
// import Home from "./Pages/Home";
// import {BrowserRouter,Routes,Route} from "react-router-dom"

// function App() {
//   return (
//     <BrowserRouter>
//      <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/gun" element={<Gun />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
 
// export default App


