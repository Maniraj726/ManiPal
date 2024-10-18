import React from 'react'
import {Link,useNavigate} from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('/appointment', '_blank');
  };

  return (
    <div>
      {/* <h1>HOME</h1> */}
      <button onClick={handleClick}>
        Appointment
      </button>
    </div>

  )
}

export default Home