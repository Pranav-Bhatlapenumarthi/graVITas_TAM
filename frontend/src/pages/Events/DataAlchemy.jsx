import React from "react";
import Aurora from "../../assets/Aurora";
import "./IndividualEvent.css"
import { Link } from "react-router-dom";

function DataAlchemy() {
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
            <img src="/data_alchemy.jpg" alt="data_alchemy" />
          </div>

          <div className="event-content">
            <h1 className="event-title">Data Alchemy 3.0</h1>
            <p className="event-description">
              Code.Compile.Conquer
            </p>
            <p className="description">
              Unlock your ML potential at Data Alchemy 3.0, a hands-on workshop where you'll dive into practical projects, master the fundamentals, and receive expert guidance. Transform your skills from basics to expertise and kickstart your Machine Learning journey with us!
            </p>
            <div className="details">
              <p>Venue: Shakespeare Gallery</p>
              <p>Date: 24th Sept, 2025</p>
              <p>Time: 9:00 am - 7:00 pm</p>
              <p>Team size: 1</p>
              <p>Registration Fee (per person): Rs.175/-</p>
            </div>
            {/* <Link to="/register/individual/data-alchemy" className="team-link">Click to Register</Link> */}
            <Link to="https://gravitas.vit.ac.in/events/7a6dd3c9-e4c6-4e69-adf7-e7141ac2ec4e" target="_blank" className="team-link">Click to Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAlchemy;
