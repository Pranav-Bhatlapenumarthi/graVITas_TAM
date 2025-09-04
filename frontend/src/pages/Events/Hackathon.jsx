import React from "react";
import "./IndividualEvent.css"
import { Link } from "react-router-dom";

function Hackathon() {
  return (
    <>
    {/* <div className="event-bg">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </div> */}
    <div className="event-detail">
      <h1>Hackathon</h1>
      <p>
        A fun and challenging event where participants tackle coding puzzles
        under time constraints.
      </p>

      <h2>Rules</h2>
      <ul>
        <li>Teams of up to 3 members.</li>
        <li>All solutions must be original.</li>
        <li>Time limit: 2 hours.</li>
      </ul>
      <Link to="/register/team" className="team-link">Click for Team Registration</Link>
      <a href="https://vit.ac.in/" target="_blank" rel="noreferrer">
        <button>Register on VIT Gravitas</button>
      </a>
    </div>

  </>
  );
}

export default Hackathon;
