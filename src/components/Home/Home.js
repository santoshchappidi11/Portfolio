import React, { memo, useEffect, useRef } from "react";
import "./Home.css";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

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
    <Fade delay={150} triggerOnce>
      <Fade delay={2500} triggerOnce></Fade>
      <section id="Home" className="section-1" ref={sectionRef}>
        <main className="main">
          <div className="main-intro">
            <div className="intro">
              <Slide triggerOnce>
                <p>
                  Hello There <span class="wave">👋</span>
                </p>
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
                  {/* <button>Latest Projects</button> */}
                  <motion.button whileTap={{ scale: 0.85 }}>
                    Latest Projects
                  </motion.button>
                </a>
                <a href="#About">
                  {/* <button>More About Me</button> */}
                  <motion.button whileTap={{ scale: 0.85 }}>
                    More About Me
                  </motion.button>
                </a>
              </Fade>
            </div>

            <div className="intro-scroll">
              <a href="#About" id="scroll-down-below">
                SCROLL DOWN{" "}
                <i className="fas fa-angle-double-down" id="scroll-down"></i>
              </a>
            </div>
          </div>
        </main>
      </section>
    </Fade>
  );
};

export default memo(Home);
