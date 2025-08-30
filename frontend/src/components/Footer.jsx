import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-socials">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/tam.vit_vellore/?hl=en" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://in.linkedin.com/company/tam-vit" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
