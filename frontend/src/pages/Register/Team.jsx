import React, { useState } from "react";
import "./Team.css";

function Team({ eventName }) {
  const [teamidDiff, setTID] = useState("");
  const [role, setRole] = useState("");
  const [indireg, setIR] = useState(0);
  const [teamId, setTeamId] = useState("");
  const [formData, setFormData] = useState({
    name: "", regNumber: "", email: "", phone: "", teamName: "", memberCount: "", teamId: ""
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  const betterNames = {
    "code-cortex" : "Code Cortex 2.0",
    "data-alchemy" : "Data-Alchemy 3.0",
    "survival-showdown" : "Survival Showdown",
  }

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

    if (role=="leader") {
      fetch(apiUrl+'api/register/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => {
          // alert(`Registration successful ! Team Id: ${data.teamcode}`);
          teamId = data.teamcode;
          console.log(teamId)
          const payload2 = {
            name: formData.name,
            regNo: formData.regNumber,
            email: formData.email,
            phone: formData.phone,
            teamcode: teamId,
            leader: true
          };
          const payload3 = {
            teamcode: teamId,
            regNo: formData.regNumber
          }
          fetch(apiUrl+'api/register/member', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload2)
          })
            .then(res => res.json())
            .then(data => {
              fetch(apiUrl+'api/register/updateLeader', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload3)
              })
                .then(res => res.json())
                .then(data => {
                  console.log("Updated team !");
                  setTID(teamId);
                  if(eventName.toLowerCase() === "code-cortex"){
                    // window.location.href = "https://gravitas.vit.ac.in/events/0f3f4ce7-5e02-488c-8187-1b18f3407a01"; 
                    window.open("https://gravitas.vit.ac.in/events/0f3f4ce7-5e02-488c-8187-1b18f3407a01", "_blank");            
                  }
                })
                .catch(err => {
                  console.log("Update failed !");
                })
            })
            .catch(err => {
              console.log("Registration failed !");
            })
        })
        .catch(err => {
          alert("Registration failed !");
        })
    } else if (role=="member") {
      const payload2 = {
        name: formData.name,
        regNo: formData.regNumber,
        email: formData.email,
        phone: formData.phone,
        teamcode: formData.teamId,
        leader: false
      };
    
      fetch(apiUrl+'api/register/member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload2)
      })
      .then(res => res.json())
      .then(data => {
        setIR(1);
        console.log("individual member registered successfully");
      })
    }
  };

  console.log(teamidDiff)

  return (
    <div className="form-container">
      <h1>{betterNames[eventName]} Registrations</h1>
      <div className="role-selector">
        <label>
          <input type="radio" name="role" value="leader" checked={role === "leader"}
            onChange={() => {
              setRole("leader");
            }}
          /> Register as Team Leader</label>

        <label>
          <input type="radio" name="role" value="member" checked={role === "member"}
            onChange={() => {
              setRole("member");
              // setTeamId(""); // members don’t generate IDs
            }}
          />Register as Team Member</label>
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
              {/* <input type="number" name="memberCount" placeholder="Number of Team Members (max 4)" value={formData.memberCount} onChange={handleChange} min="1" max="4" required /> */}
              {teamidDiff!="" && (
                <div className="team-id">
                  <p>
                    You have successfully registered for {betterNames[eventName]}! 
                  </p>
                  <p>
                    Your Team ID is <strong>{teamidDiff}</strong>.
                  </p>
                </div>

              )}
            </>
          )}

          {role === "member" && (
            <>
              <input type="text" name="teamId" placeholder="Team ID (from Leader)" value={formData.teamId} onChange={handleChange} required />
              {indireg==1 && (
                <p className="team-id">
                  You have successfully registered for {betterNames[eventName]}! 
                </p>
              )}
            </>
          )}

          <button type="submit" className="submit-btn"> Submit Registration </button>
        </form>
      )}
    </div>
  );
}

export default Team;
