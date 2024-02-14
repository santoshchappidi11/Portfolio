import React, { memo } from "react";
import "./Socials.css";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Socials = () => {
  return (
    <>
      <section className="section-5">
        <main className="socials">
          <div className="social-header">
            <AttentionSeeker effect="pulse">
              <h2>SOCIALS</h2>
            </AttentionSeeker>
          </div>
          <div className="social-links">
            <Fade cascade>
              <a href="https://github.com/santoshchappidi11">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/santosh-chappidi-a98b59215">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </Fade>
          </div>
          <div className="social-logo">
            <a href="./#">
              S<span>C</span>
            </a>
          </div>
          <div className="copyright">
            <p>Copyright © 2024 | Made by Santosh Chappidi</p>
          </div>
        </main>
      </section>
    </>
  );
};

export default memo(Socials);
