import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    // Toggle menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when a link is clicked
    const closeMenu = () => setIsOpen(false);
    return(
        <nav className="navbar">
            <img src="/TAMLogoBetter.png" alt="tam_logo" />
            
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>

            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li className="dropdown">
                    <Link className="dropbtn">Events</Link>
                    <div className="dropdown-content">
                        <Link to="/events/survival-showdown" onClick={closeMenu}>Survival Showdown</Link>
                        <Link to="/events/hackathon" onClick={closeMenu}>Code Cortex 2.0</Link>
                        <Link to="/events/data-alchemy" onClick={closeMenu}>Data Alchemy 3.0</Link>
                    </div>
                </li>
                <li><Link to="/contactus" onClick={closeMenu}>Contact Us</Link></li>
                <li><Link to="/devs" onClick={closeMenu}>Team</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;