import React from "react";
import { motion } from "framer-motion";
import downloadLogo from "../../Images/download-resume.png";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div id="main-banner">
      <a href="https://github.com/santoshchappidi11">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/santosh-chappidi-a98b59215">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://drive.google.com/uc?export=download&id=1zE8H1quQNnjbA-ktb7ki8DCXBZ4vbbbA">
        <motion.button
          whileTap={{ scale: 0.9 }}
          style={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Resume
          <div id="resume-download" style={{ height: "25px", width: "25px" }}>
            <img
              src={downloadLogo}
              alt="download"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </motion.button>
      </a>
    </div>
  );
};

export default ContactBanner;
