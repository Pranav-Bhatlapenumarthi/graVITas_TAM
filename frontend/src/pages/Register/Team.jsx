// Team.jsx
import React, { useState } from "react";
import "./Team.css";

function Team({eventName}) {
  const [role, setRole] = useState(""); // leader or member
  const [teamId, setTeamId] = useState(""); // auto-generated for leader
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

    const payload = {
      event: eventName,
      role,
      teamId,
      ...formData
    };
    console.log("Submitted Data:", payload);
    alert(`Form successfully submitted for ${eventName}`);
  };

  return (
    <div className="form-container">
      <h1>Team Registration</h1>
      <p>For Survival Showdown / Hackathon</p>

      {/* Role Selection */}
      <div className="role-selector">
        <label>
          <input
            type="radio"
            name="role"
            value="leader"
            checked={role === "leader"}
            onChange={() => {
              setRole("leader");
              generateTeamId(); // auto-generate Team ID
            }}
          />
          Register as Team Leader
        </label>

        <label>
          <input
            type="radio"
            name="role"
            value="member"
            checked={role === "member"}
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

          {/* Team Leader Fields */}
          {role === "leader" && (
            <>
              <input
                type="text"
                name="teamName"
                placeholder="Team Name"
                value={formData.teamName}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="memberCount"
                placeholder="Number of Team Members (max 3)"
                value={formData.memberCount}
                onChange={handleChange}
                min="1"
                max="3"
                required
              />
              {teamId && (
                <p className="team-id">
                  <strong>Your Team ID:</strong> {teamId}
                </p>
              )}
            </>
          )}

          {/* Team Member Fields */}
          {role === "member" && (
            <>
              <input
                type="text"
                name="teamId"
                placeholder="Team ID (from Leader)"
                value={formData.teamId}
                onChange={handleChange}
                required
              />
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
