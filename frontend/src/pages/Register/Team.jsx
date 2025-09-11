import React, { useState } from "react";
import "./Team.css";

function Team({ eventName }) {
  const [role, setRole] = useState("");
  const [teamId, setTeamId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    regNumber: "",
    email: "",
    phone: "",
    teamName: "",
    memberCount: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    var teamId;

    const payload = {
      event: eventName,
      name: formData.teamName
    };

    fetch('https://gravitas-tam-backend.onrender.com/api/register/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        alert(`Registration successful ! Team Id: ${data.teamcode}`);
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
            alert(`Updated team !`);
          })
          .catch(err => {
            alert("Update failed !");
          })
          .then(data => {
            alert(`Registration successful !`);
          })
          .catch(err => {
            alert("Registration failed !");
          })
        console.log(teamId)
      })
      .catch(err => {
        alert("Registration failed !");
      })
  };



  return (
    <div className="form-container">
      <h1>Team Registration</h1>
      <p>For Survival Showdown / Hackathon</p>
      <div className="role-selector">
        <label>
          <input type="radio" name="role" value="leader" checked={role === "leader"}
            onChange={() => {
              setRole("leader");
            }}
          />
          Register as Team Leader
        </label>

        <label>
          <input type="radio" name="role" value="member" checked={role === "member"}
            onChange={() => {
              setRole("member");
              setTeamId(""); // members don’t generate IDs
            }}
          />
          Register as Team Member
        </label>
      </div>

      {role && (
        <form onSubmit={handleSubmit} className="event-form">
          {/* Common Data */}
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="regNumber" placeholder="Registration Number" value={formData.regNumber} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Mail ID" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />

          {/* Team Leader Fields */}
          {role === "leader" && (
            <>
              <input type="text" name="teamName" placeholder="Team Name" value={formData.teamName} onChange={handleChange} required />
              <input type="number" name="memberCount" placeholder="Number of Team Members (max 3)" value={formData.memberCount} onChange={handleChange} min="1" max="3" required />
              {teamId && (
                <p className="team-id">
                  <strong>Your Team ID:</strong> {teamId}
                </p>
              )}
            </>
          )}

          {role === "member" && (
            <>
              <input type="text" name="teamId" placeholder="Team ID (from Leader)" value={formData.teamId} onChange={handleChange} required />
            </>
          )}

          <button type="submit" className="submit-btn">
            Submit Registration
          </button>
        </form>
      )}
    </div>
  );
}

export default Team;
