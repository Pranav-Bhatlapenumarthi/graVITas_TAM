import React from "react";
import "./IndividualEvent.css"
import Aurora from "../../assets/Aurora";
import { Link } from "react-router-dom";

function CodeCortex() {
  return (
    <div>
      <div className="event-bg">
        <div className="aurora-wrapper">
          <Aurora
            colorStops={["#0077b6", "#00b4d8", "#03045e"]}
            blend={0.5}
            amplitude={1.0}
          />
        </div>
        <div className="event-detail">
          <div className="event-pic">
            <img src="/code_cortex.jpg" alt="code_cortex" />
          </div>

          <div className="event-content">
            <h1 className="event-title">Code Cortex 2.0</h1>
            <p className="event-description">
              The ultimate innovation race: Code, Create and Conquer!
            </p>
            <p className="description">
              An electrifying hackathon where innovation meets adrenaline! This high-energy event units brilliant minds to
              tackle real-world challenges, unleash cutting-edge code, and build game-changing solutions.
            </p>
            <div className="details">
              <p>Venue: Shakespeare Gallery</p>
              <p>Date: 26th Sept, 2025 - 27th Sept, 2025</p>
              <p>Time: 10:00 am - 8:00 pm</p>
              <p>Team size: 4</p>
              <p>Registration Fee (per person): Rs. 215/-</p>
            </div>
            {/* <Link to="/register/team/hackathon" className="team-link">Click to Register</Link> */}
            <Link to="https://gravitas.vit.ac.in/events/0f3f4ce7-5e02-488c-8187-1b18f3407a01" target="_blank" className="team-link">Click to Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeCortex;
