import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Gun() {
  const [location, setLocation] = useState('Manipal Hospitals Jayanagar');
  const [specialty, setSpecialty] = useState('');
  const [appointmentType, setAppointmentType] = useState('Physical Visit (OPD)');
  // const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDateTime, setAppointmentDateTime] = useState('');
  const locationcity = useLocation(); // Access location object
  const { id } = locationcity.state || {};
    const [selectedId, setSelectedId ]= useState(id);
    console.log (selectedId)

  const cities = [
    { id:1, name: 'Bengaluru', imageUrl: 'https://example.com/bengaluru.png' },
    { id:2, name: 'Bhubaneswar', imageUrl: 'https://example.com/bhubaneswar.png' },
    { id:3, name: 'Delhi NCR', imageUrl: 'https://example.com/delhi.png' },
    { id:4, name: 'Goa', imageUrl: 'https://example.com/goa.png' },
    { id:5, name: 'Jaipur', imageUrl: 'https://example.com/jaipur.png' }
  ];

  const handleCityChange = (id) => {
    setSelectedId(id);
  };


  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
  };

  const handleAppointmentTypeChange = (event) => {
    setAppointmentType(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setAppointmentDateTime(event.target.value);
  };

  const handleSubmit = () => {
    // Implement logic to submit the appointment form
    console.log('Submitting appointment request...');
    console.log({ location, specialty, appointmentType, appointmentDateTime});
    
  };

  return (
    <div>
      
      <div className="appointment-form">
        <h2>Book an Appointment</h2>
        <div className="form-group">
          <label htmlFor="location">Confirm Location</label>
          <select id="location" value={location} onChange={handleLocationChange}>
            
             <option value="Manipal Hospitals Jayanagar"> Manipal Hospitals Jayanagar</option> 
           
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Select Speciality</label>
          <select id="specialty" value={specialty} onChange={handleSpecialtyChange}>
            <option value="">Click here to select</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value=" Dermatology,"> Dermatology,</option>
            <option value="ENT (Ear, Nose and Throat)">ENT (Ear, Nose and Throat)</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="doctor-search">Select preferred time and date</label>
            <input type="datetime-local" id="appointment-datetime" value={appointmentDateTime} onChange={handleDateTimeChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="appointment-type">Type of Appointment</label>
          <select id="appointment-type" value={appointmentType} onChange={handleAppointmentTypeChange}>
            <option value="Physical Visit (OPD)">Physical Visit (OPD)</option>
            <option value="virtual Meet (VM)">virtual Meet (VM)</option>
          </select>
        </div>
        <div className='or'><h3>or</h3></div>
        <div className='click'>
          <h3>Looking for a specific doctor?</h3>
          <div id="click"><h3>Click here to search!</h3></div>
        </div>
        <button onClick={handleSubmit} id="button-book" >Proceed</button>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
export default Gun;
