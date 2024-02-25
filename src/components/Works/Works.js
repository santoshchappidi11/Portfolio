import React, { useState } from "react";
import "./Works.css";
import { projectsData } from "../Data/Data";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";

const Works = () => {
  // const [tilt, setTilt] = useState({ mouseX: 0, mouseY: 0 });

  // const handleMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   const x = (clientX / window.innerWidth - 0.5) * 5;
  //   const y = -(clientY / window.innerHeight - 0.5) * 5;

  //   setTilt({ mouseX: x, mouseY: y });
  // };

  return (
    <>
      <section id="Works" className="section-3">
        <header className="works-header">
          <AttentionSeeker effect="pulse">
            <h4>Works</h4>
          </AttentionSeeker>
          <h1>Latest Projects</h1>
          <p>Here you can find some of the projects that I created Recently.</p>
        </header>
        <main className="works-content">
          <Fade cascade>
            <div className="content-projects">
              {projectsData.map((item) => {
                const {
                  id,
                  title,
                  image,
                  description,
                  languages,
                  view,
                  code,
                  project_url,
                  github_url,
                } = item;
                return (
                  <>
                    <ProjectCard
                      id={id}
                      title={title}
                      // url={url}
                      image={image}
                      description={description}
                      languages={languages}
                      view={view}
                      code={code}
                      project_url={project_url}
                      github_url={github_url}
                    />
                    {/* <div
                      className="project"
                      key={id}
                      onMouseMove={handleMouseMove}
                      style={{
                        transform: `rotateX(${tilt.mouseY * 10}deg) rotateY(${
                          tilt.mouseX * 10
                        }deg)`,
                      }}
                    >
                      <div className="project-image">
                        <img src={image} alt="project-images" />
                      </div>
                      <div className="project-description">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h4>
                          <span>{languages}</span>
                        </h4>
                        <div className="project-buttons">
                          <div className="project-button">
                            <a href={url}>
                              <button>{view}</button>
                            </a>
                          </div>
                          <div className="project-button">
                            <a href={url}>
                              <button>{code}</button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </>
                );
              })}
            </div>
          </Fade>
        </main>
      </section>
    </>
  );
};

export default Works;
