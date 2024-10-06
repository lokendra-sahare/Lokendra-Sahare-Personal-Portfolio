import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./hero.scss";
import download from "./../../../assets/download.svg";
import download2 from "./../../../assets/download2.svg";
import github from "./../../../assets/github1.svg";
import github2 from "./../../../assets/github2.svg";
import leetcode from "./../../../assets/leetcode.svg";
import leetcode1 from "./../../../assets/leetcode1.svg";
import linkdin from "./../../../assets/linkdin.svg";
import linkdin1 from "./../../../assets/linkdin1.svg";
import photo from "./../../../assets/photo.png";
import photo2 from "./../../../assets/photo3.png";
import photo3 from "./../../../assets/photo4.png";
import photo4 from "./../../../assets/photo5.png";

const Hero = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);

  useEffect(() => {
    const animateValue = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 2, 3000, setExperience); // Count from 0 to 2 in 2 seconds
    animateValue(0, 20, 3000, setProjects); // Count from 0 to 20 in 2 seconds
    animateValue(0, 9, 3000, setTechnologies); // Count from 0 to 9 in 2 seconds
  }, []);

  return (
    <div className="hero">
      <div className="mainHero">
        <div className="wrapper">
          <h2>Web Developer</h2>
          <h1>Hello I'm</h1>
          <h1 className="colored">Lokendra Sahare</h1>
          <p className="desc">
            I excel at creating seamless web applications, proficient in
            MongoDB, Express, React, Node.js, and JavaScript.
          </p>
          <div className="links">
            {/* Download CV Button */}
            <button className="cv-button">
              Download CV
              <img className="download-icon" src={download} alt="download" />
              <img
                className="download-icon-hover"
                src={download2}
                alt="download-hover"
              />
            </button>

            {/* Social Links */}
            <div className="social-links">
              <div className="social-link">
                <a href="https://github.com/lokendra-sahare">
                  <img
                    className="social-icon github-ka-icon"
                    src={github}
                    alt="github"
                  />
                  <img
                    className="social-icon github-icon-hover"
                    src={github2}
                    alt="github-hover"
                  />
                </a>
              </div>
              <div className="social-link">
                <a href="https://www.linkedin.com/in/lokendra-sahare-7ab577261/">
                  <img
                    className="social-icon linkedin-icon"
                    src={linkdin}
                    alt="linkedin"
                  />
                  <img
                    className="social-icon linkedin-icon-hover"
                    src={linkdin1}
                    alt="linkedin-hover"
                  />
                </a>
              </div>
              <div className="social-link">
                <a href="https://leetcode.com/u/Lokendra_Sahare/">
                  <img
                    className="social-icon leetcode-icon"
                    src={leetcode}
                    alt="leetcode"
                  />
                  <img
                    className="social-icon leetcode-icon-hover"
                    src={leetcode1}
                    alt="leetcode-hover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wrapper around image and animated SVG */}
        <div className="image-wrapper">
          <img className="heroImage" src={photo2} alt="Hero" />
          <motion.svg
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            className="animated-circle"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              }}
            />
          </motion.svg>
        </div>
      </div>

      {/* BottomHero with counting animation */}
      <div className="bottomHero">
        <div className="bottomWrapper">
          <div className="bottomSkills">
            <h1>{experience}</h1>
            <p>Years of experience</p>
          </div>
          <div className="bottomSkills">
            <h1>{projects}</h1>
            <p>Projects completed</p>
          </div>
          <div className="bottomSkills">
            <h1>{technologies}</h1>
            <p>Technologies mastered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
