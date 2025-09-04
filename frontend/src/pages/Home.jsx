import "./Home.css";
import React from "react";
import PixelCard from "../assets/PixelCard";
import Aurora from "../assets/Aurora";
import FlowingMenu from "../assets/FlowingMenu";

const demoItems = [
  { link: '#', text: 'Collaborate'},
  { link: '#', text: 'Innovate' },
  { link: '#', text: 'Empower' },
];

function Home() {
  return (
    <>
    <div className="home">
      <div className="aurora-wrapper">
        <Aurora
          colorStops={["#0077b6", "#00b4d8", "#03045e"]}
          blend={0.5}
          amplitude={1.0}
        />
      </div>
      <section className="intro">
        <h1>TAM-VIT</h1>
        <p>Our mission is to make Artificial Intelligence more accessible to students while developing tools that serve the needs of consumers</p>

        <h1>What we stand for</h1>
      </section>

      <section className="menu-scroll">
        <div style={{ height: '300px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>
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
            <button onClick={() => (window.location.href = "/events/survival-showdown")}>
              Register Now
            </button>
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
              <button onClick={() => (window.location.href = "/events/hackathon")}>
              Register Now
            </button>
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
            <button onClick={() => (window.location.href = "/events/data-alchemy")}>
              Register Now
            </button>
          </div>
        </div>
      </section>
    </div>
    </> 
  );
}

export default Home;