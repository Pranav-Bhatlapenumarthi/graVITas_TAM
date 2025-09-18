import React from "react";
import Aurora from "../../assets/Aurora";
import "./IndividualEvent.css"
import { Link } from "react-router-dom";

function SurvivalShowdown() {
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
            <img src="/survival_showdown.jpg" alt="survive" />
          </div>

          <div className="event-content">
            <h1 className="event-title">Survivial Showdown: The Stranger Things Version</h1>
            <p className="event-description">
              Escape the Upside Down Before It Escapes You !
            </p>
            <p className="description">
              Participate in a thrilling team-based challenge where you'll solve logic puzzles, complete tasks under time pressure and collaborate with fellow players to progress.
              Outwit the Upside Down and its monstrous inhabitants to claim victory. Will you survive, or will the Demogorgon prevail? Join us for an immersive experience inspired by Stranger Things!
            </p>
            
            <div className="details">
              <p>Venue: Mahatma Gandhi Block - 308</p>
              <p>Date: 21st Sept, 2025</p>
              <p>Time: 9:00 am - 8:00 pm</p>
              <p>Team size: 4</p>
              <p>Registration Fee (per person): Rs.150/-</p>
            </div>
            {/* <Link to="/register/team/survival-showdown" className="team-link">Click to Register</Link> */}
            <Link to="https://gravitas.vit.ac.in/events/4959ecd8-e4d0-4348-b3b0-5b9c539972ed" target="_blank" className="team-link">Click to Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurvivalShowdown;