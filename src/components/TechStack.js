import React from "react";
import "./TechStack.css";
import { motion } from "framer-motion";

// Icons data
const techStackData = [
  {
    name: "C Language",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
  },

  {
    name: "Express",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "NodeJS",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Postman",
    imgSrc: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
 
 
  
  {
    name: "HTML",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Bootstrap",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Redux",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
 
  {
    name: "JavaScript",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    imgSrc:
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "React",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "MySQL",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
  },
  {
    name: "MongoDB",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
 
  {
    name: "Git",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "Firebase",
    imgSrc: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
];

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 0,
    transition: { duration: 0 },
  },
};

const TechStack = () => {
  return (
    <section id="techstack" className="techstack">
      <h2>Technologies and Tools</h2>
      <p className="description">
        Using a combination of cutting-edge technologies and reliable
        open-source software, I build user-focused, performant apps and websites
        for smartphones, tablets, and desktops.
      </p>
      <div className="icons">
        {techStackData.map((tech) => (
          <motion.div
            className="icon"
            key={tech.name}
            variants={iconVariants}
            whileHover="hover"
          >
            <img src={tech.imgSrc} alt={tech.name} />
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
