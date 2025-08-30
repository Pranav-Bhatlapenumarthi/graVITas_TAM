import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <h2>graVITas_TAM</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                    <Link className="dropbtn" to="/events">Events</Link>
                    <div className="dropdown-content">
                        <Link to="/service1">Survival Showdown</Link>
                        <Link to="/service2">Data Alchemy</Link>
                        <Link to="/service3">Hackathon</Link>
                    </div>
                </li>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;