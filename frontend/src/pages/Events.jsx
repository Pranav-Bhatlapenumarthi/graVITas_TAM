import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

function Events() {
  return (
    <div className="events-page">
      <h1>Our Events</h1>
      <p>Select an event to view more details:</p>

      <div className="event-links">
        <Link to="/events/survival-showdown" className="event-card">
          Survival Showdown
        </Link>
        <Link to="/events/hackathon" className="event-card">
          Hackathon
        </Link>
        <Link to="/events/data-alchemy" className="event-card">
          Data Alchemy
        </Link>
      </div>
    </div>
  );
}

export default Events;
