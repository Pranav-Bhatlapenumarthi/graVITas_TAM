import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact(){
    const [form, setForm] = useState({
        name: "", email: "", message: "", title:""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const userID = import.meta.env.VITE_USER_ID;

        emailjs.send(serviceID, templateID, 
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
                subject: form.title
            }, 
            userID)
            .then((result) => {
                console.log("Success: ", result.text);
                alert("Message sent");
            })
            .catch((error) => {
                console.log("Error: ", error);
                alert("Failed to send message");
            }
        );
    };

    return(
        <div className="page-bg">
            <div className="contact-container">
                <h2>Get in touch with the TAM-Fam !!</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required/>
                    <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required/>
                    <input type="text" name="title" placeholder="Your Subject" value={form.title} onChange={handleChange} required/>
                    <textarea name="message" placeholder="How can we help you?" value={form.message} onChange={handleChange} required />
                    <button type="submit">Send Message</button>
                </form>
                {status && <p className="status-msg">{status}</p>}
            </div>
        </div>
    );
};

export default Contact;