import React from "react";
import "./Welcome.css"; 

const Welcome = ({ userDetails }) => {
  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Welcome to the Marathon Event!</h2>
      <div className="user-details">
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Contact Number:</strong> {userDetails.contactNo}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Mobile Number:</strong> {userDetails.mobileNo}</p>
        <p><strong>Blood Group:</strong> {userDetails.bloodGroup}</p>
      </div>
    </div>
  );
};

export default Welcome;
