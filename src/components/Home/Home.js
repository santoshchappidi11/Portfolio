import React, { memo, useEffect, useRef } from "react";
import "./Home.css";
import heroImage from "../../Images/hero.png";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Home = () => {
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
      <section id="Home" className="section-1" ref={sectionRef}>
        <main className="main">
          <div className="main-intro">
            <div className="intro">
              <Slide triggerOnce>
                <p>Hello There</p>
              </Slide>
              <Fade cascade delay={1000} triggerOnce>
                <h1>
                  I'm <span className="multicolor">Santosh Chappidi,</span> MERN
                  Stack <span className="greycolor">Web Developer</span>
                  <span
                    className="multicolor"
                    style={{ color: "rgb(219, 81, 219)" }}
                  >
                    .
                  </span>
                </h1>
              </Fade>
            </div>
            <div className="intro-btns">
              <Fade cascade delay={1500} triggerOnce>
                <a href="#Works">
                  <button>Latest Projects</button>
                </a>
                <a href="#About">
                  <button>More About Me</button>
                </a>
              </Fade>
            </div>
            <Fade delay={2500} triggerOnce>
              <div className="intro-scroll">
                <a href="https://github.com/santoshchappidi11">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/santosh-chappidi-a98b59215">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://drive.google.com/uc?export=download&id=1cTE1AAmVXyGXZ1_8afJO0jqSsMhcuJKp">
                  <button>Resume</button>
                </a>
                <a href="#About">
                  SCROLL DOWN{" "}
                  <i className="fas fa-angle-double-down" id="scroll-down"></i>
                </a>
              </div>
            </Fade>
          </div>
          {/* <div className="main-img">
            <Zoom>
              <img src={heroImage} alt="Intro" loading="lazy" />
            </Zoom>
          </div> */}
        </main>
      </section>
    </>
  );
};

export default memo(Home);
