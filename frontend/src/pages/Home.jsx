import "./Home.css";
import React from "react";
import PixelCard from "../assets/PixelCard";

function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h1>TAM-VIT</h1>
        <p>Our mission is to make Artificial Intelligence more approachable for students to learn and develop, and more accessible for the
          consumers to inculcate in their daily lives. We plan to focus and pivot the technical enthusiasm towards ML and AI, while retaining
          unwavering focus on developing fundamental technicals skills which are non-negotiable in this domain. </p>
      </section>

      <section className="events">
        <h2>Check out our upcoming events !</h2>
        <div className="event-cards">
          <div className="event-card">
            <PixelCard variant="blue">
              <h3>Survival Showdown</h3>
              <p>
                A thrilling coding challenge where participants must survive
                through rounds of problem-solving. 
              </p>
              <span>Date: 15th Sept 2025</span>
          </PixelCard>
          </div>

           <div className="event-card">
              <PixelCard variant="blue">
                <h3>Hackathon</h3>
                <p>
                  Collaborate, innovate, and build exciting projects in a 24-hour
                  hackathon. 
                </p>
                <span>Date: 22nd Sept 2025</span>
              </PixelCard>
          </div>

          <div className="event-card">
            <PixelCard variant="blue">
              <h3>Data Alchemy</h3>
              <p>
                A data-driven competition where participants transform raw data
                into powerful insights.
              </p>
              <span>Date: 5th Oct 2025</span>
            </PixelCard>
          </div>

        </div>
      </section>
       {/* Call to Action */}
      <section className="cta">
        <button onClick={() => (window.location.href = "/register")}>
          Register Now
        </button>
      </section>
    </div>    
  );
}

export default Home;