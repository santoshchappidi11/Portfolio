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
  // const initialTilt = { mouseX: 0, mouseY: 0 };
  // const [tilt, setTilt] = useState(initialTilt);

  // const handleMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   const x = (clientX / window.innerWidth - 0.5) * 8;
  //   const y = -(clientY / window.innerHeight - 0.5) * 8;

  //   setTilt({ mouseX: x, mouseY: y });
  // };

  // const handleMouseLeave = () => {
  //   setTilt(initialTilt);
  // };

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
          {/* <div id="project-fetaures">
            {features?.length && features?.map((item) => <p>{item}</p>)}
          </div> */}
        </div>
        <div id="all-lang-logos">
          {languages?.length &&
            languages?.map((lang) => (
              <div id="lang-logos" key={lang}>
                <img src={lang} alt="logos" />
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
