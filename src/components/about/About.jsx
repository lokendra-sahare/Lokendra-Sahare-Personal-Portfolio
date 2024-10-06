import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCoffee,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiC, SiMongodb } from "react-icons/si";

import "./about.scss"; // Import the plain CSS file

// About data
const about = {
  title: "About me",
  description:
    "I am an Indian web developer fluent in English, enabling professional conversations and collaboration in diverse tech environments.",
  info: [
    { fieldName: "Name", fieldValue: "Lokendra Sahare" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Phone", fieldValue: "(+91) 748 994 5515" },
    { fieldName: "Email", fieldValue: "lokendrasahare@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have 2 years of experience as a MERN developer and freelancer, delivering high-quality web applications and innovative solutions.",
  items: [
    {
      company: "Freelancing",
      position: "Freelance Web Developer",
      duration: "2022 - Present",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am a MERN developer with online training and am currently pursuing a B.Tech degree, blending practical skills with theoretical knowledge for a well-rounded tech education.",
  items: [
    {
      institution: "Shri Ram Insitute Of Technology",
      degree: "Computer Science Engineering(B.Tech)",
      duration: "2022 - Present",
    },
    {
      institution: "Online Course",
      degree: "Full Stack Web Developer",
      duration: "2022 - 2024",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "I possess strong skills in MongoDB, Express, React, and Node.js, enabling me to develop efficient, scalable web applications and deliver seamless user experiences.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiC />, name: "C Language" },
    { icon: <FaCoffee />, name: "Java" },
  ],
};

const About = () => {
  const [selectedSection, setSelectedSection] = useState("experience");

  // Function to render content based on the selected section
  const renderContent = () => {
    switch (selectedSection) {
      case "experience":
        return (
          <>
            <h1>{experience.title}</h1>
            <p>{experience.description}</p>
            <div className="about-content ">
              {experience.items.map((item, index) => (
                <li className="content everything-about-experience" key={index}>
                  <h3>{item.duration}</h3>
                  <h1>{item.position}</h1>
                  <div className="wraped">
                    <span></span>
                    <p>{item.company}</p>
                  </div>
                </li>
              ))}
            </div>
          </>
        );
      case "education":
        return (
          <>
            <h1>{education.title}</h1>
            <p>{education.description}</p>
            <div className="about-content">
              {education.items.map((item, index) => (
                <li className="content" key={index}>
                  <h3>{item.duration}</h3>
                  <h1>{item.degree}</h1>
                  <div className="wraped">
                    <span></span>
                    <p>{item.institution}</p>
                  </div>
                </li>
              ))}
            </div>
          </>
        );
      case "skills":
        return (
          <>
            <h1>{skills.title}</h1>
            <p>{skills.description}</p>
            <div className="skills-list">
              {skills.skillList.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </>
        );
      case "about":
        return (
          <>
            <h1>{about.title}</h1>
            <p>{about.description}</p>

            {/* Split the info array into two parts */}
            <div className="get-about">
              {/* First container (first 4 items) */}
              <div className="about-container-section">
                <ul>
                  {about.info.slice(0, 4).map((item, index) => {
                    return (
                      <li key={index}>
                        <p>{item.fieldName}</p>
                        <h2>{item.fieldValue}</h2>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Second container (next 4 items) */}
              <div className="about-container-section">
                <ul>
                  {about.info.slice(4).map((item, index) => {
                    return (
                      <li key={index}>
                        <p>{item.fieldName}</p>
                        <h2>{item.fieldValue}</h2>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <div className="main-about-container">
        <div className="all-about-container">
          <div className="about-header">
            <h1>Why hire me?</h1>
            <p>
              Hire me for seamless web apps, with expertise in MongoDB, Express,
              React, and Node.js.
            </p>
          </div>
          <div className="about-buttons">
            <button
              onClick={() => setSelectedSection("experience")}
              style={{
                backgroundColor: selectedSection === "experience" ? "#0f9" : "",
              }}
            >
              Experience
            </button>
            <button
              onClick={() => setSelectedSection("education")}
              style={{
                backgroundColor: selectedSection === "education" ? "#0f9" : "",
              }}
            >
              Education
            </button>
            <button
              onClick={() => setSelectedSection("skills")}
              style={{
                backgroundColor: selectedSection === "skills" ? "#0f9" : "",
              }}
            >
              Skills
            </button>
            <button
              onClick={() => setSelectedSection("about")}
              style={{
                backgroundColor: selectedSection === "about" ? "#0f9" : "",
              }}
            >
              About me
            </button>
          </div>
        </div>
        <div className="content-container">
          <div className="content-header">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
