import React from "react";
import "./Developers.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const developers = [
  {
    name: "Pranav Bhatlapenumarthi",
    role: "Frontend Dev",
    image: "/Images/pranav_pic.jpg",
    bio: "Focused on AI-ML research and building intelligent systems. Passionate about building beautiful and elegant user interfaces.",
    linkedin: "https://www.linkedin.com/in/pranav-bhatlapenumarthi-81018b314/",
    github: "https://github.com/Pranav-Bhatlapenumarthi"
  },
  {
    name: "Shuvam Mitra",
    role: "Backend Dev",
    image: "/Images/shuvam_pic.jpg",
    bio: "Building intuitive projects on the Web. Passionate about competitive programming & design.",
    linkedin: "https://www.linkedin.com/in/shuvam-mitra/",
    github: "https://github.com/shuvam586/",
  },
];

const team = [
  {
    name: "Dr. Monica Subashini.M",
    role: "Faculty Coordintor",
    image: "/Images/monicamam_pic.jpg",
    linkedin: "https://www.linkedin.com/in/dr-monica-subashini-m-8012a531/",
  },
  {
    name: "Dr. Sivakumar Rajagopal",
    role: "Faculty Coordintor",
    image: "/Images/sivakumarsir_pic.jpg",
    linkedin: "https://www.linkedin.com/in/sivakumar-rajagopal-908a72268/",
  }

];

const team_2 =[
  {
    name: "Vedant Patil",
    role: "Chairperson",
    image: "/Images/vedant_pic.jpg",
    linkedin: "https://www.linkedin.com/in/vedant-patil-891a74164/",
  },
  {
    name: "Somil Agrawal",
    role: "Secretary",
    image: "/Images/somil_pic.jpg",
    linkedin: "https://www.linkedin.com/in/somil-agrawal/",
  },
    {
    name: "Divya Juliet",
    role: "Vice Chairperson",
    image: "/Images/divya_pic.jpg",
    linkedin: "https://www.linkedin.com/in/divya-juliet-72a50828a/",
  },
    {
    name: "Yug Raithatha",
    role: "Co-Secretary",
    image: "/Images/yug_pic.jpg",
    linkedin: "https://www.linkedin.com/in/yug-raithatha-525977289/",
  },
    {
    name: "Mayank Gupta",
    role: "Technical Head",
    image: "/Images/mayank_pic.jpg",
    linkedin: "https://www.linkedin.com/in/mayank-gupta-218636253/",
  },
    {
    name: "Tanisha Bagga",
    role: "Management Head",
    image: "/Images/tanisha_pic.jpg",
    linkedin: "https://www.linkedin.com/in/tanisha-bagga-00aab628a/",
  },
    {
    name: "Reyansh Ashok",
    role: "Projects Head",
    image: "/Images/reyansh_pic.jpg",
    linkedin: "https://www.linkedin.com/in/reyansh-ashok-0207b1232/",
  },
    {
    name: "Nimaath",
    role: "Design Head",
    image: "/Images/nimaath_pic.jpg",
    linkedin: "https://www.linkedin.com/in/nimaath/",
  },
    {
    name: "Dhanjith Velluva",
    role: "Marketing Head",
    image: "/Images/dhanjith_pic.jpg",
    linkedin: "https://www.linkedin.com/in/dhanjith-velluva/",
  },
    {
    name: "Riya Sharma",
    role: "PR Head",
    image: "/Images/riya_pic.jpg",
    linkedin: "https://www.linkedin.com/in/riya-sharma-a2a79024a/",
  }
];

function Developers() {
  return (
    <div className="dev-page">
      <h2 className="title">Meet our Developers</h2>
      <div className="dev-grid">
        {developers.map((dev, index) => (
          <div className="dev-card" key={index}>
            <img src={dev.image} alt={dev.name} className="dev-img" />
            <h3>{dev.name}</h3>
            <p className="role">{dev.role}</p>
            <p className="bio">{dev.bio}</p>
            <div className="socials">
              <a href={dev.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href={dev.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="title">Meet our Dynamic Team</h2>
      <div className="team-grid t1">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="dev-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <div className="socials">
              <a href={member.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        ))}
      </div>

      <div className="team-grid t2">
        {team_2.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="dev-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <div className="socials">
              <a href={member.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developers;
