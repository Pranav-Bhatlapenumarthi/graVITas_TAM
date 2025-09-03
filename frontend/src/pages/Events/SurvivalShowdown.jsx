import React from "react";
import "./IndividualEvent.css"
import LetterGlitch from "../../assets/LetterGlitch";

function SurvivalShowdown() {
  return (
    <>
    <div className="event-bg">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </div>
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
    </div>
    </>
  );
}

export default SurvivalShowdown;
