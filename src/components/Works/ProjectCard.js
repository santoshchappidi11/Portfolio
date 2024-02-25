import React, { useState } from "react";
import "./Works.css";
// import htmlImg from "../../Images/html-5.png";
// import cssImg from "../../Images/css-3.png";
// import jsImg from "../../Images/js.png";
// import reactImg from "../../Images/react.png";
// import expressImg from "../../Images/express.png";
// import mongoImg from "../../Images/mongodb.png";
// import nodeImg from "../../Images/node-js.png";

const ProjectCard = ({
  id,
  title,
  image,
  description,
  languages,
  view,
  code,
  project_url,
  github_url,
}) => {
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
    <div
      className="project"
      key={id}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      // style={{
      //   transform: `rotateX(${tilt.mouseY * 10}deg) rotateY(${
      //     tilt.mouseX * 10
      //   }deg)`,
      // }}
    >
      <div className="project-image">
        <img
          src={image}
          alt="project-images"
          // style={{ imageRendering: "pixelated" }}
        />
      </div>
      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>

        <div id="all-lang-logos">
          {" "}
          {languages?.length &&
            languages?.map((lang) => (
              <div id="lang-logos">
                <img src={lang} alt="logos" />
              </div>
            ))}
        </div>
        <div className="project-buttons">
          <div className="project-button">
            <a href={project_url}>
              <button>View</button>
            </a>
          </div>
          <div className="project-button">
            <a href={github_url}>
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
