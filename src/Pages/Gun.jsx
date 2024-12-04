import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import getSpeciality from "../components/Specialities";

function Gun() {
  const locationcity = useLocation();
  const { city } = locationcity.state || {};

  const [location, setLocation] = useState();
  const [specialty, setSpecialty] = useState("");
  const [appointmentType, setAppointmentType] = useState();
  const [appointmentDateTime, setAppointmentDateTime] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");

  const spe=getSpeciality();
  


  useEffect(() => {
    setLocation(city);
    // Set the minimum date and time to the current date and time
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16); // Format for 'datetime-local'
    setCurrentDateTime(formattedDateTime);
  }, [city]);

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
    console.log("Submitting appointment request...");
    console.log({ location, specialty, appointmentType, appointmentDateTime });

    // Show confirmation alert after submitting
    alert("Your appointment is confirmed");
  };

  return (
    <div>
      <div className="appointment-form">
        <h2>Book an Appointment</h2>
        <div className="main_div">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select id="location" disabled>
              <option value={`Manipal Hospitals ${city}`}>
                {`Manipal Hospitals ${city}`}
              </option>
            </select>
          </div>
          <div className="form-group">
      <label htmlFor="specialty">Select Speciality</label>
      <select
        id="specialty"
        value={specialty}
        onChange={handleSpecialtyChange}
      >
        <option value="">Click here to select</option>
        {spe?.map((specialtyOption, index) => (
          <option key={index} value={specialtyOption.name}>
            {specialtyOption.name}
          </option>
        ))}
      </select>
    </div>        </div>

        <div className="main_div">
          <div className="form-group">
            <label htmlFor="appointment-datetime">
              Select preferred time and date
            </label>
            <input
              type="datetime-local"
              id="appointment-datetime"
              value={appointmentDateTime}
              onChange={handleDateTimeChange}
              min={currentDateTime} // This ensures only future dates can be selected
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointment-type">Type of Appointment</label>
            <select
              id="appointment-type"
              value={appointmentType}
              onChange={handleAppointmentTypeChange}
            >
              <option value="Physical Visit (OPD)">Physical Visit (OPD)</option>
              <option value="virtual Meet (VM)">Virtual Meet</option>
            </select>
          </div>
        </div>
        <div className="or">
          <h3>or</h3>
        </div>
        <div className="click">
          <h3>Looking for a specific doctor?</h3>
          <div id="click">
            <h3>Click here to search!</h3>
          </div>
        </div>
        <div className="proceed">
          <button onClick={handleSubmit} id="button-book">
            Proceed
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Gun;
