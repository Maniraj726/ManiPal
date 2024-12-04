import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Popup({handleClick, setLocation}) {
  const navigate = useNavigate();
    const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    { id:1, name: 'Bengaluru' },
    { id:2, name: 'Bhubaneswar' },
    { id:3, name: 'Delhi NCR' },
    { id:4, name: 'Goa' },
    { id:5, name: 'Jaipur'},
    { id:6, name: 'kerala' }
  ];
  

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setLocation(city)
  };

  const handleProceed = () => {
    if (selectedCity) {

      handleClick();
      // Navigate to the appointment page, passing the selected city as a state if needed
      navigate('/appointment', { state: { city: selectedCity } });
      
    } else {
      console.log('Please select a city');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={handleClick}><button className='btc'>x</button></span>
        <h2>Hi there!</h2>
        <p>Help us get you at the closest doctor.</p>
        <label htmlFor="city-select">Select your city</label>
        
        <div className="custom-dropdown">
          {cities.map((city) => (
            <div 
            key={city.name} 
            className={`dropdown-option ${selectedCity === city.name ? 'selected' : ''}`} 
            onClick={() => handleCityChange(city.name)}
            >
              <div src={city.imageUrl} alt={city.name} className="city-image" />
              <span>{city.name}</span>
            </div>
          ))}
        </div>

      </div>
      <button onClick={handleProceed} className="buttonp">Proceed</button>
    </div>
  );
}

export default Popup;
