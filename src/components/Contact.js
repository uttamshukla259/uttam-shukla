import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        I'm always open to connect with fellow developers, collaborators, or
        just chat about web development. Feel free to reach out through any
        platform or send me a message directly!
      </p>

      {/* Contact Links */}
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/your-github"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
          <span>GitHub</span>
        </a>
        <a
          href="https://twitter.com/your-twitter"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={40} />
          <span>Twitter</span>
        </a>
        {/* Email Link */}
        <a href="mailto:your-email@example.com" className="contact-link">
          <FaEnvelope size={40} />
          <span>Email</span>
        </a>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send me a message</h3>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
