import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Popup({handleClick}) {
  const navigate = useNavigate();
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedId, setSelectedId ]= useState('');

  const cities = [
    { id:1, name: 'Bengaluru', imageUrl: 'https://example.com/bengaluru.png' },
    { id:2, name: 'Bhubaneswar', imageUrl: 'https://example.com/bhubaneswar.png' },
    { id:3, name: 'Delhi NCR', imageUrl: 'https://example.com/delhi.png' },
    { id:4, name: 'Goa', imageUrl: 'https://example.com/goa.png' },
    { id:5, name: 'Jaipur', imageUrl: 'https://example.com/jaipur.png' }
  ];

  const handleCityChange = (city,id) => {
    setSelectedCity(city);
    setSelectedId(id);
  };

  const handleProceed = () => {
    if (selectedCity) {
      handleClick();
      // Navigate to the appointment page, passing the selected city as a state if needed
      navigate('/appointment', { state: { id: selectedId } });
      
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
            onClick={() => handleCityChange(city.name,city.id)}
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
