import React, { use, useState } from "react";
import "./Team.css";
import { useNavigate } from "react-router-dom";


function Individual({ eventName }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", regNumber: "", email: "", phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      event: eventName,
      name: "2345-single",
    };

    var teamId;
    fetch('https://gravitas-tam-backend.onrender.com/api/register/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        alert(`Registration successful !`);
        teamId = data.teamcode;
        const payload2 = {
          name: formData.name,
          regNo: formData.regNumber,
          email: formData.email,
          phone: formData.phone,
          teamcode: teamId
        };
        const payload3 = {
          teamcode: teamId,
          regNo: formData.regNumber
        }
        fetch('https://gravitas-tam-backend.onrender.com/api/register/member', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload2)
        })
          .then(res => res.json())
        fetch('https://gravitas-tam-backend.onrender.com/api/register/updateLeader', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload3)
        })
          .then(res => res.json())
          .then(data => {
            console.log("Updated team !");
            window.location.href = "https://gravitas.vit.ac.in/events/7a6dd3c9-e4c6-4e69-adf7-e7141ac2ec4e";
          })
          .catch(err => {
            console.log("Update failed !");
          })
          .then(data => {
            console.log(`Registration successful !`);
          })
          .catch(err => {
            console.log("Registration failed !");
          })
      })
      .catch(err => {
        alert("Registration failed !");
      })

    };

  return (
    <div className="form-container">
      <h1>Individual Registration</h1>
      <p>For Data Alchemy</p>

      <form onSubmit={handleSubmit} className="event-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="regNumber" placeholder="Registration Number" value={formData.regNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Mail ID" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default Individual;
