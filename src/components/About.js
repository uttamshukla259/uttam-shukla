import React from "react";
import "./About.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-container">
      <h1 className="about-title">A Bit About Me</h1>
      <p className="about-text">
        I'm a self-taught web developer and Mobile App Developer with experience
        in designing new features from ideation to production, implementation of
        wireframes and design flows into high-performance software applications.
        <br />
        <br />
        I take into consideration the user experience while writing reusable and
        efficient code. I passionately combine good design, technology, and
        innovation in all my projects, which I like to accompany from the first
        idea to release.
        <br />
        <br />
        Currently, I'm focused on backend development and constantly learning
        new technologies to improve my skills and knowledge in the field.
      </p>
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
    </section>
  );
};

export default About;
