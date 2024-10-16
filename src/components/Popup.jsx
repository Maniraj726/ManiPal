// import React, { useState } from 'react';

// function Popup() {
//   const [selectedCity, setSelectedCity] = useState('');

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   const handleProceed = () => {
//     // Handle proceed logic here, e.g., navigate to another page
//     console.log(`Selected city: ${selectedCity}`);
//   };

//   const cities = [
//     { value: 'Bengaluru', label: 'Bengaluru'},
//     { value: 'Tamil Nadu', label: 'Tamil Nadu' },
//     { value: 'Kerala', label: 'Kerala' },
//     { value: 'Goa', label: 'Goa' },
//     { value: 'Jaipur', label: 'Jaipur' },
//     { value: 'Delhi NCR', label: 'Delhi NCR' },
//     { value: 'Bhubaneswar', label: 'Bhubaneswar' },
//     { value: 'Mumbai', label: 'Mumbai' },
//     { value: 'Nepal', label: 'Nepal' },
//   ];

//   return (
//     <div className="popup">
//       <div className="popup-content">
//         <span className="close-button" onClick={() => { /* Handle close button click */ }}>&times;</span>
//         <h2>Hi there!</h2>
//         <p>Help us get you at the closest doctor.</p>
//         <div className='select'>
//         <label htmlFor="city-select">Select your city</label>
//         </div>
//         <div id="city-select"  >
//           {/* <option value="Bengaluru"  >  Bengaluru</option>
//           <option value="Bhubaneswar">Tamil Nadu</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Goa">Goa</option>
//           <option value="Jaipur">Jaipur</option>
//           <option value="Delhi NCR">Delhi NCR</option>
//           <option value="Bhubaneswar">Bhubaneswar</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Nepal">Nepal</option> */}
          
//            {cities.map((city, index) => (
//               <div className='options' key={index} onClick={(e)=>handleCityChange(e)}>
//                  <img  className="loc" src="./img/map-pin.svg" /> 
//                  <span>{city.label}</span>
//                 </div>
              
//             ))}
//         </div>
        
//       </div>
//       <button className="buttonp" onClick={handleProceed}>Proceed</button>
//     </div>
//   );
// }

// export default Popup;
import React, { useState } from 'react';


function Popup() {
  const [selectedCity, setSelectedCity] = useState('');
  const cities = [
    { name: 'Bengaluru', imageUrl: 'https://example.com/bengaluru.png' },
    { name: 'Bhubaneswar', imageUrl: 'https://example.com/bhubaneswar.png' },
    { name: 'Delhi NCR', imageUrl: 'https://example.com/delhi.png' },
    { name: 'Goa', imageUrl: 'https://example.com/goa.png' },
    { name: 'Jaipur', imageUrl: 'https://example.com/jaipur.png' }
  ];

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleProceed = () => {
    console.log(`Selected city: ${selectedCity}`);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={() => { /* Handle close button click */ }}>&times;</span>
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
