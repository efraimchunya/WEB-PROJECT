import axios from 'axios';
import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email, message };
    try {
      const response = await axios.post("http://localhost:8080/api/contacts", contactData, {
        headers: { "Content-Type": "application/json" }
      });
      if (response.status === 200) {
        setSuccessMessage("Contact added successfully");
        setTimeout(() => {
          navigate("/contacts");
        }, 4000);
      } else {
        setErrorMessage("Failed to add contact");
      }
    } catch (error) {
      console.error("Error adding contact:", error);
      setErrorMessage("Error adding contact");
    }
  };

  const form = useRef();
  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email Me!</h4>
            <h5>ephraimbob87@gmail.com</h5>
            <a href="mailto:ephraimbob87@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {successMessage && <p style={{ color: "blue" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </section>
  );
};

export default Contacts;
