import React from "react";
import "./Works.css";
import { projectsData } from "../Data/Data";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";

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
                  image,
                  description,
                  features,
                  languages,
                  view,
                  code,
                  project_url,
                  github_url,
                } = item;
                return (
                  <>
                    <ProjectCard
                      key={id}
                      id={id}
                      title={title}
                      // url={url}
                      image={image}
                      description={description}
                      features={features}
                      languages={languages}
                      view={view}
                      code={code}
                      project_url={project_url}
                      github_url={github_url}
                    />
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
