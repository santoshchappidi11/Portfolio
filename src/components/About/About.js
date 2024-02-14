import React, { useEffect, useRef } from "react";
import "./About.css";
import skillsImage from "../../Images/skills.png";
import htmlImg from "../../Images/html-5.png";
import cssImg from "../../Images/css-3.png";
import jsImg from "../../Images/js.png";
import reactImg from "../../Images/react.png";
import expressImg from "../../Images/express.png";
import mongoImg from "../../Images/mongodb.png";
import nodeImg from "../../Images/node-js.png";
import gitImg from "../../Images/git.png";
import githubImg from "../../Images/github.png";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set a reference to the section's DOM element
    if (sectionRef.current) {
      // You can use this reference in the ScrollSpy logic
      // For example, you can log the position of the section
      const rect = sectionRef.current.getBoundingClientRect();
      console.log(
        `Home Section Position: Top: ${rect.top}, Bottom: ${rect.bottom}`
      );
    }
  }, []);

  return (
    <>
      <section id="About" className="section-2" ref={sectionRef}>
        <header className="about-header">
          <AttentionSeeker effect="pulse">
            <h4>About</h4>
          </AttentionSeeker>
          <h1>Personal Info</h1>
          <p>Get to know more about me.</p>
        </header>
        <main className="about-main">
          <div className="about-img">
            <Zoom>
              <img src={skillsImage} alt="skills" loading="lazy" />
            </Zoom>
          </div>
          <div className="about-content">
            <div className="content-intro">
              <h2>Hello!</h2>
              <p>
                I’m a passionate <b>MERN Stack developer</b>, having a quite
                good knowledge in <b>HTML, CSS, JAVASCRIPT and REACT</b>.
                Comfortable with <b>Node.js and Framework like Express</b>. I am
                <b> adaptable</b> and a <b>quick learner</b>, want to use my
                knowledge and skills to gain more practical exposure within the
                company,{" "}
                <b>constantly seeking for new challenges and opportunities </b>
                that will enhance both my knowledge and professional growth.
              </p>

              <p>
                I would love to hear from you, whether it's a
                <b> Job, Internship opportunity or just a chat,</b> feel free to
                <b> contact me!</b>
              </p>
            </div>
            <div className="content-skills">
              <h2>Skills</h2>
              <div className="skills">
                <Fade cascade>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={htmlImg} alt="html" />
                    </div>
                    <h4>HTML</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={cssImg} alt="css" />
                    </div>
                    <h4>CSS</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={jsImg} alt="JS" />
                    </div>
                    <h4>JAVASCRIPT</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={reactImg} alt="react" />
                    </div>
                    <h4>REACT JS</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={expressImg} alt="express" />
                    </div>
                    <h4>EXPRESS JS</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={mongoImg} alt="mongo" />
                    </div>
                    <h4>MONGO DB</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={nodeImg} alt="node" />
                    </div>
                    <h4>NODE JS</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={gitImg} alt="git" />
                    </div>
                    <h4>GIT</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={githubImg} alt="github" />
                    </div>
                    <h4>GITHUB</h4>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
