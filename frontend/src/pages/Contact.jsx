import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "";
        const templateID = "";
        const userID = "";

        emailjs.send(serviceID, templateID, userID).then(
            () => {
                setStatus("Message sent");
                setForm({name:"", email:"", message:""});
            },
            (error) => {
                setStatus("Failed to send message");
                console.error(error);
            }
        );
    };
    
    return(
        <h1>Hello</h1>
    );
};

export default Contact;