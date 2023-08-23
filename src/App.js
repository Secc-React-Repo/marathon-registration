import React, { useState } from "react";
import Form from "./Form";
import Welcome from "./Welcome";
import "./App.css"; // Import CSS for this component

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  const handleSubmit = (formData) => {
    setUserDetails(formData);
    console.log("Submitted User Details:", formData);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Marathon Registration Form</h1>
      <Form onSubmit={handleSubmit} />
      {userDetails && <Welcome userDetails={userDetails} />}
      <div className="marathon-details">
        <h3>Marathon Details:</h3>
        <p>Date: Next Sunday</p>
        <p>Venue: Gachibowli, Hyderabad</p>
        <p>Timings: 10:00 AM</p>
      </div>
    </div>
  );
};

export default App;
