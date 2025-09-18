import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaMedium, FaEnvelopeOpen } from "react-icons/fa";

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
                        <a href="https://medium.com/@tam_vit" target="_blank" rel="noreferrer">
                            <FaMedium />
                        </a>
                        <a href="mailto:Mlai@vit.ac.in" target="_blank" rel="noreferrer">
                            <FaEnvelopeOpen />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
