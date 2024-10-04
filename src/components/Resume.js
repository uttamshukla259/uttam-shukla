import "./Resume.css";
import React from "react";

const Resume = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1r2fbRORd0ShZD4xiBObBcWm7tplAG0W2/view";

  return (
    <section id="resume" className="resume">
      <h1>See My Resume</h1>
      {/* Download Resume */}
      <a href={resumeUrl} className="download-btn" download>
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
