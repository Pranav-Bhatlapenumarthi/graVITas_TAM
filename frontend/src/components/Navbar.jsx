import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <img src="/TAMLogo.png " alt="tam_logo" />
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                    <Link className="dropbtn">Events</Link>
                    <div className="dropdown-content">
                        <Link to="/events/survival-showdown">Survival Showdown</Link>
                        <Link to="/events/data-alchemy">Data Alchemy</Link>
                        <Link to="/events/hackathon">Code Cortex</Link>
                    </div>
                </li>
                <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;