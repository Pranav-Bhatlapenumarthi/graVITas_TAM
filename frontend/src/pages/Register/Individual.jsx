// Individual.jsx
import React, { useState } from "react";
import "./Team.css";

function Individual({eventName}) {
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
    const payload = {
      event: eventName,
      name: "2345-single",
      // ...formData
    };

    var teamId;
    fetch('https://gravitas-tam-backend.onrender.com/api/register/team', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      alert(`Registration successful !`);
      teamId = data.teamcode;
      console.log(teamId)
    })
    .catch(err => {
      alert("Registration failed !");
    })

    const payload2 = {
      name: formData.name,
      regNo: formData.regNumber, 
      email: formData.email, 
      phone: formData.phone, 
      teamcode: teamId
    };

    fetch('https://gravitas-tam-backend.onrender.com/api/register/member', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload2)
    })
    .then(res => res.json())
    .then(data => {
      alert(`Registration successful !`);
    })
    .catch(err => {
      alert("Registration failed !");
    })

    const payload3 = {
      teamcode: teamId,
      regNo: formData.regNumber
    }

    fetch('https://gravitas-tam-backend.onrender.com/api/register/updateLeader', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload3)
    })
    .then(res => res.json())
    .then(data => {
      alert(`Updated team !`);
    })
    .catch(err => {
      alert("Update failed !");
    })
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
