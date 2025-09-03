import React from "react";
import "./IndividualEvent.css"
import { Link } from "react-router-dom";

function SurvivalShowdown() {
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
      <h1>Survival Showdown</h1>
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
      {/* <a href="register/team" target="_blank" rel="noreferrer">
        <button>Click for Team Formation</button>
      </a> */}
      <Link to="/register/team" className="team-link">Click for Team Registration</Link>
      <a href="https://vit.ac.in/" target="_blank" rel="noreferrer">
        <button>Register on VIT Gravitas</button>
      </a>
    </div>

    </>
  );
}

export default SurvivalShowdown;
