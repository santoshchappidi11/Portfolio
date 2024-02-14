import React from "react";
import "./Works.css";
import { projectsData } from "../Data/Data";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Works = () => {
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
                  url,
                  image,
                  description,
                  languages,
                  view,
                  code,
                } = item;
                return (
                  <>
                    <div className="project" key={id}>
                      <div className="project-image">
                        <img src={image} alt="project-images" />
                      </div>
                      <div className="project-description">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h4>
                          <span>{languages}</span>
                        </h4>
                      </div>
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
