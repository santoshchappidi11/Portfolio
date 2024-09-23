import React, { useEffect, useState } from "react";
import "./Project.css";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  const { projectId } = useParams();
  const [singleProject, setSingleProject] = useState({});
  const navigateTo = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (projectsData?.length) {
      const singlePro = projectsData?.find((item) => item?.id == projectId);
      setSingleProject(singlePro);
    }
  }, [projectId]);

  useEffect(() => {
    if (singleProject) {
      setIsLoading(false);

      if (singleProject?.live == false) {
        setIsDisabled(true);
      }
    }
  }, [singleProject]);

  const { logos } = singleProject;

  return (
    <>
      {isLoading ? (
        <>
          <div className={"loader"}>
            <div className={"nav-logo"}>
              <a href="./#">
                S<span>C</span>
              </a>
            </div>
            <div className={"main-loader"}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <Fade cascade delay={200} triggerOnce>
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
                  <motion.button
                    whileTap={{ scale: isDisabled ? "" : "0.85" }}
                    id="visit"
                    disabled={isDisabled}
                    style={{
                      backgroundColor: isDisabled ? "#A0A0A0" : "white",
                      cursor: isDisabled ? "not-allowed" : "pointer",
                    }}
                  >
                    Visit Live
                  </motion.button>
                </a>
                <a href={singleProject?.github_url}>
                  <motion.button whileTap={{ scale: "0.85" }} id="github">
                    Github <FontAwesomeIcon icon={faGithub} className="fa-lg" />
                  </motion.button>
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
                          <img
                            src={lang?.icon}
                            alt="logos"
                            className={lang.text == "React" && "react-animate"}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div id="project-right">
                <Fade cascade delay={600} triggerOnce>
                  <div id="project-info">
                    <h3>{singleProject?.description}</h3>
                    <div id="project-status">
                      <h4>Status</h4>
                      <p
                        className={
                          singleProject?.live == false ? "not-live" : "live"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faCircleDot}
                          size="sm"
                          id="status-icon"
                        />
                        {"  "}
                        {singleProject?.live == true
                          ? "Project is live"
                          : "Project is not live"}
                      </p>
                    </div>
                    <div id="project-features">
                      <h4>Features</h4>
                      <div id="main-features">
                        {singleProject?.features?.map((item, index) => {
                          const mainLogo = logos && logos[index];

                          return (
                            <div id="features">
                              <div id="logos">
                                <div id="main-logo">
                                  <img src={mainLogo} alt="logo" />
                                </div>
                              </div>
                              <span>{item}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="copyright-pro">
              <p>Copyright © 2024 | Made by Santosh Chappidi.</p>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
};

export default Project;
