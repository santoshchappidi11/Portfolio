import React, { useState } from "react";
import "./Works.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  title,
  image,
  description,
  languages,
  project_url,
  github_url,
}) => {
  const navigateTo = useNavigate();

  return (
    <div className="project" key={id}>
      <div
        className="project-image"
        onClick={() => navigateTo(`project/${id}`)}
      >
        <img
          src={image}
          alt="project-images"
          // style={{ imageRendering: "pixelated" }}
        />
      </div>
      <div className="project-description">
        <h2>{title}</h2>
        <div id="project-description">
          <p>{description}</p>
        </div>
        <div id="all-lang-logos">
          {languages?.length &&
            languages?.map((lang) => (
              <div id="lang-logos" key={lang}>
                <img
                  src={lang?.icon}
                  alt="logos"
                  className={lang.text == "React" && "react-animate"}
                />
              </div>
            ))}
        </div>
        <div className="project-buttons">
          <div className="project-button">
            <a href={project_url}>
              {/* <button>View</button> */}
              <motion.button whileTap={{ scale: "0.85" }}>View</motion.button>
            </a>
          </div>
          <div className="project-button">
            <a href={github_url}>
              {/* <button>Github</button> */}
              <motion.button whileTap={{ scale: "0.85" }}>Github</motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
