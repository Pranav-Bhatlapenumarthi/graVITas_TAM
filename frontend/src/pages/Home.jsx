import "./Home.css";
import React from "react";
import PixelCard from "../assets/PixelCard";
import Aurora from "../assets/Aurora";
import FlowingMenu from "../assets/FlowingMenu";

const demoItems = [
  { link: '#', text: 'Collaborate' },
  { link: '#', text: 'Innovate' },
  { link: '#', text: 'Empower' },
];

function Home() {
  return (
    <div>
      <div className="home">
        <div className="aurora-wrapper">
          <Aurora
            colorStops={["#0077b6", "#00b4d8", "#03045e"]}
            blend={0.5}
            amplitude={1.0}
          />
        </div>
        <section className="intro">
          <div className="intro-div">
            <h1> The AI & ML Club </h1>
            <p> Bridging the gap between learners and Artificial Intelligence by building tools that create real impact for communities </p>
          </div>
            <h1> What we stand for </h1>
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
                <p>Get ready for an adrenaline fueled event! A thrilling coding challenge where participants must survive
                  through rounds of problem-solving. </p>
              </PixelCard>
              <button onClick={() => (window.location.href = "/events/survival-showdown")}>
                Register Now
              </button>
            </div>

            <div className="event-card">
              <PixelCard variant="blue">
                <h3>Code Cortex 2.0</h3>
                <p>The ultimate innovation race: Code, Create and Conquer! Collaborate, innovate, and build exciting projects in this intensive
                  hackathon. </p>
              </PixelCard>
              <button onClick={() => (window.location.href = "/events/hackathon")}>
                Register Now
              </button>
            </div>

            <div className="event-card">
              <PixelCard variant="blue">
                <h3>Data Alchemy 3.0</h3>
                <p>From foundational concepts to advanced techniques, we'll cover it hands-on, practical and designed to take you from
                  beginner to master.</p>
              </PixelCard>
              <button onClick={() => (window.location.href = "/events/data-alchemy")}>
                Register Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;