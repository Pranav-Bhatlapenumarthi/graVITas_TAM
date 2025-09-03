// Individual.jsx
import React, { useState } from "react";
import "./Team.css";

function Individual() {
  const [formData, setFormData] = useState({
    name: "",
    regNumber: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="form-container">
      <h1>Individual Registration</h1>
      <p>For Data Alchemy</p>

      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="regNumber"
          placeholder="Registration Number"
          value={formData.regNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Mail ID"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Submit Registration
        </button>
      </form>
    </div>
  );
}

export default Individual;
