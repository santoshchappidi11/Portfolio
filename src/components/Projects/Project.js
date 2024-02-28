import React, { useEffect, useState } from "react";
import "./Project.css";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  const { projectId } = useParams();
  const [singleProject, setSingleProject] = useState({});
  const navigateTo = useNavigate();

  // console.log(singleProject, "single pro");

  useEffect(() => {
    if (projectsData?.length) {
      const singlePro = projectsData?.find((item) => item?.id == projectId);
      setSingleProject(singlePro);
    }
  }, [projectId]);

  return (
    <div id="single-project">
      <div id="project-top">
        <div id="top-left">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="left-arrow"
            onClick={() => navigateTo("/")}
          />
          <h2>{singleProject?.title}</h2>
        </div>
        <div id="top-right">
          <a href={singleProject?.project_url}>
            <button>Visit Live</button>
          </a>
          <a href={singleProject?.github_url}>
            <button>
              Github <FontAwesomeIcon icon={faGithub} className="fa-lg" />
            </button>
          </a>
        </div>
      </div>
      <div id="project-sections">
        <div id="project-left">
          <div id="project-image">
            <img src={singleProject?.image} alt="project" />
          </div>
          <div id="technologies">
            <h3>Technologies Used</h3>
            <div id="main-techno">
              {singleProject?.languages?.length &&
                singleProject?.languages?.map((lang) => (
                  <div id="project-lang">
                    <img src={lang} alt="logos" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div id="project-right">
          <div id="project-info">
            <h3>{singleProject?.description}</h3>
            <div id="project-status">
              <h4>Status</h4>
              <p>Live</p>
            </div>
            <div id="project-features">
              <h4>Features</h4>
              <ol>
                {singleProject?.features?.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-pro">
        <p>Copyright © 2024 | Made by Santosh Chappidi.</p>
      </div>
    </div>
  );
};

export default Project;
