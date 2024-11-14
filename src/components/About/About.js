import React, { useEffect, useRef } from "react";
import "./About.css";
import htmlImg from "../../Images/html-5.png";
import cssImg from "../../Images/css-3.png";
import tailwindcss from "../../Images/tailwind.png";
import jsImg from "../../Images/js.png";
import reactImg from "../../Images/react.png";
import nextImg from "../../Images/next-js.png";
import expressImg from "../../Images/express.png";
import mongoImg from "../../Images/mongodb.png";
import nodeImg from "../../Images/node-js.png";
import gitImg from "../../Images/git.png";
import githubImg from "../../Images/github.png";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

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
          <div className="about-content">
            <div className="content-intro">
              <h2>Hello!</h2>
              <p>
                A passionate{" "}
                <b>
                  MERN Stack developer<span> 👩🏻‍💻</span>
                </b>
                , having quite good knowledge in <b>HTML</b> <span>📝</span>,{" "}
                <b>CSS</b> <span>🎨</span>, <b>JAVASCRIPT</b>
                <span>⚡</span>and <b>REACT</b> <span>⚛️</span>. Comfortable
                with
                <b> Node.js</b> <span>🛠️</span> and frameworks like{" "}
                <b>Express</b> <span>🚀</span>. A <b>quick learner</b>{" "}
                <span>📚</span> with an <b>adaptable nature</b> <span>🌱</span>.
                Eager to{" "}
                <b>apply my skills and knowledge to real-world projects</b>{" "}
                <span>🌍</span> and contribute to a dynamic team <span>🤝</span>
                . As a <b>recent post-graduate</b> <span>🎓</span>, I am
                actively <b>seeking a role</b> that not only allows me to apply
                and expand upon my existing knowledge, but also{" "}
                <b>offers continuous learning opportunities and challenges</b>
                <span> 🚀</span>.
              </p>

              <p id="para-end">
                I would love to hear from you, whether it's a<b> Job</b>{" "}
                <span>💼</span>, <b>Internship opportunity</b> <span>📈</span>,
                or just a <b>chat</b> <span>🗨️</span>, feel free to
                <b id="about-contact">
                  <a href="./#Contact"> contact me!</a>
                </b>
              </p>
            </div>
            <div className="content-skills">
              <AttentionSeeker effect="pulse">
                <h3>Skills</h3>
              </AttentionSeeker>
              <div className="skills">
                <Fade cascade duration={650}>
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
                      <img src={tailwindcss} alt="css" />
                    </div>
                    <h4>Tailwind CSS</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={jsImg} alt="JS" />
                    </div>
                    <h4>JAVASCRIPT</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={reactImg} alt="react" id="react" />
                    </div>
                    <h4>REACT JS</h4>
                  </div>
                  <div className="badge">
                    <div id="skills-img">
                      <img src={nextImg} alt="react" id="next" />
                    </div>
                    <h4>Next JS</h4>
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
