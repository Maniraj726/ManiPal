import React, { useState } from "react";
import Popup from "./Popup";

function Header() {
  const [open, setOpen]=useState(false);
  const [location, setLocation]=useState("Bengaluru");

  const handleClick=()=>{
    setOpen(!open)
    // console.log("opened", open)
  }
  return (
    <>
    <div className="header">
      <div className="header1">
        <img src="./img/Logo.svg" alt="" />
      </div>
      <div className="header2">
     <div className="map" onClick={handleClick}>
        <img  className="loc" src="./img/map-pin.svg" /> 
        <span>{location}</span>
        </div>   
        <img src="./img/Emergency.svg" />
        <button id="button-hover"> <img src="/img/Call Us.svg" /> Appointment</button>
      </div>

      {open && (
        <>
          <div className="modal-overlay" onClick={handleClick}></div> {/* Overlay */}
          <div className="popup" >
            <Popup handleClick={handleClick} setLocation={setLocation} />
          </div>
        </>
      )}
    </div>
     
    
    
    </>
  );
}

export default Header;
