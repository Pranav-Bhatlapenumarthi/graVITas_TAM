import React from "react";
import "./IndividualEvent.css"
import { Link } from "react-router-dom";

function CodeCortex() {
  return (
    <div className="event-bg">
    <div className="event-detail">
      <div className="event-pic">
        <img src="/code_cortex.jpg" alt="code_cortex" />
      </div>

      <div className="event-content">
        <h1 className="event-title">Code Cortex</h1>
        <p className="event-description">
          A fun and challenging event where participants tackle coding puzzles
          under time constraints.
        </p>
        <div className="details">
          <p>Venue: Anna Auditorium</p>
          <p>Time: 9:00 am - 9:00 pm</p>
          <p>Date: 28th Sept, 2025</p>
          <p>Team size: 3</p>
        </div>
        <Link to="/register/team/hackathon" className="team-link">Click for Team Registration</Link>
        <a href="https://vit.ac.in/" target="_blank" rel="noreferrer">
          <button>Register on VIT Gravitas</button>
        </a>
      </div>
    </div>
  </div>
  );
}

export default CodeCortex;
