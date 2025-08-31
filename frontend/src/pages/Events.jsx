import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import Particles from "../assets/Particles.jsx";

function Events() {
  return (
    <>
    <div className="bg">
        <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
        />
    </div>
    <div className="events-page">
      <h1>Our Events</h1>
      <p>Select an event to view more details:</p>

      <div className="event-links">
        <Link to="/events/survival-showdown" className="cards">
          Survival Showdown
        </Link>
        <Link to="/events/hackathon" className="cards">
          Hackathon
        </Link>
        <Link to="/events/data-alchemy" className="cards">
          Data Alchemy
        </Link>
      </div>
    </div>
    </>
  );
}

export default Events;
