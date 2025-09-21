import React, { use, useState } from "react";
import "./Team.css";
import { useNavigate } from "react-router-dom";
import NavbarBlock from "../../components/NavbarBlock";
import Footer from "../../components/Footer";
import Aurora from "../../assets/Aurora";

function Individual({ eventName }) {
  const navigate = useNavigate();
  const [indireg, setIR] = useState(0);
  const [formData, setFormData] = useState({
    name: "", regNumber: "", email: "", phone: ""
  });
  const [buttonLabel, setBL] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const betterNames = {
    "code-cortex": "Code Cortex 2.0",
    "data-alchemy": "Data-Alchemy 3.0",
    "survival-showdown": "Survival Showdown",
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      event: eventName,
      name: "singleMemberTeam",
    };

    var teamId;

    setBL(true);

    fetch(apiUrl + 'api/register/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        // alert(`Registration successful !`);
        setIR(1);
        teamId = data.teamcode;
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
        fetch(apiUrl + 'api/register/member', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload2)
        })
          .then(res => res.json())
          .then(data => {
            console.log(`Registration successful !`);
            fetch(apiUrl + 'api/register/updateLeader', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload3)
            })
              .then(res => res.json())
              .then(data => {
                console.log("Updated team !");
                window.open("https://gravitas.vit.ac.in/events/7a6dd3c9-e4c6-4e69-adf7-e7141ac2ec4e", "_blank");
                // window.location.href = "https://gravitas.vit.ac.in/events/7a6dd3c9-e4c6-4e69-adf7-e7141ac2ec4e";
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
      .finally(() => {
        setTimeout(() => {
          setBL(false);
        }, 1500);
      }
      )

  };

  return (
    <div className="form-main">
      <NavbarBlock />
      <div className="form-parent">
        <div className="aurora-wrapper">
          <Aurora
            colorStops={["#0077b6", "#00b4d8", "#03045e"]}
            blend={0.5}
            amplitude={1.0}
          />
        </div>
        <div className="form-container">
          <h1>{betterNames[eventName]} Registration</h1>
          {/* <p>For Data Alchemy</p> */}

          <form onSubmit={handleSubmit} className="event-form">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="regNumber" placeholder="Registration Number" value={formData.regNumber} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Mail ID" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
            {indireg == 1 && (
              <p className="team-id">
                You have successfully registered for {betterNames[eventName]}!
              </p>
            )}
            <button type="submit" disabled={buttonLabel} className="submit-btn">{buttonLabel ? "Loading" : "Submit Registration"}</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Individual;
