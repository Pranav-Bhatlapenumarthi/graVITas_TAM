import React from "react";
import Aurora from "../../assets/Aurora";
import "./IndividualEvent.css"
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function SurvivalShowdown() {
  return (
    <div className="parent-div">
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
            <h1 className="event-title">Survivial Showdown</h1>
            <p className="event-description">
              Get ready for an adrenaline fueled event!
            </p>
            <p className="description">
              The Competitive Escape Room - a pulse-pounding event packed with mind-bending puzzles
              and challenges that push your problem-solving and teamwork skills to the limit. It's an
              immersive, high-stakes experience where logic meets adrenaline.
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
      <Footer />
    </div>
  );
}

export default SurvivalShowdown;