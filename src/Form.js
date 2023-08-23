import React, { useState } from "react";
import "./Form.css"; 

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    mobileNo: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <label>Contact Number:</label>
      <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>Mobile Number:</label>
      <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
      <label>Blood Group:</label>
      <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
