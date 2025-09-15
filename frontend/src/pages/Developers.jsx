import React from "react";
import "./Developers.css";

const developers = [
  {
    name: "Pranav Bhatlapenumarthi",
    role: "Frontend Lead",
    image: "/pranav_pic.jpg",
    bio: "Focused on AI-ML research and building intelligent systems. Passionate about building beautiful and elegant user interfaces.",
    linkedin: "https://www.linkedin.com/in/pranav-bhatlapenumarthi-81018b314/",
    github: "https://github.com/Pranav-Bhatlapenumarthi"
  },
  {
    name: "Shuvam Mitra",
    role: "Backend Lead",
    image: "/shuvam_pic.jpg",
    bio: "Building intuitive projects on the Web. Passionate about competitive programming & design.",
    linkedin: "https://www.linkedin.com/in/shuvam-mitra/",
    github: "https://github.com/shuvam586/",
  },
];

function Developers() {
  return (
    <div className="dev-page">
      <h2 className="title">Meet the Developers</h2>
      <div className="dev-grid">
        {developers.map((dev, index) => (
          <div className="dev-card" key={index}>
            <img src={dev.image} alt={dev.name} className="dev-img" />
            <h3>{dev.name}</h3>
            <p className="role">{dev.role}</p>
            <p className="bio">{dev.bio}</p>
            <div className="socials">
              <a href={dev.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={dev.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developers;
