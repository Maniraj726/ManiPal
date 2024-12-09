import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Gun() {
  const locationcity = useLocation();
  const { city } = locationcity.state || {};
 
  const [location, setLocation] = useState();
  const [specialty, setSpecialty] = useState("");
  const [appointmentType, setAppointmentType] = useState();
  const [appointmentDateTime, setAppointmentDateTime] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For validation errors

  const spe = [
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Endocrinologist" },
    { id: 3, name: "Dermatology" },
    { id: 4, name: "Neurology" },
    { id: 5, name: "ENT" },
  ];

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
    const selectedDateTime = event.target.value;
    setAppointmentDateTime(selectedDateTime);

    // Validate selected date and time
    const now = new Date();
    const selectedDate = new Date(selectedDateTime);
    if (selectedDate < now) {
      setErrorMessage("Please select a future date and time.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = () => {
    if (!specialty) {
      alert("Please select a specialty.");
      return;
    }
    if (!appointmentDateTime) {
      alert("Please select a valid date and time.");
      return;
    }
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

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
            <label htmlFor="specialty">Select Specialty</label>
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
          </div>
        </div>

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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="appointment-type">Type of Appointment</label>
            <select
              id="appointment-type"
              value={appointmentType}
              onChange={handleAppointmentTypeChange}
            >
              <option value="">Select Appointment Type</option>
              <option value="Physical Visit (OPD)">Physical Visit (OPD)</option>
              <option value="Virtual Meet (VM)">Virtual Meet</option>
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
