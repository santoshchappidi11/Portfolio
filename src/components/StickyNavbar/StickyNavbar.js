import React, { useEffect, useState } from "react";
import "./StickyNavbar.css";
import { navLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import callLogo from "../../Images/sentmessage.png";

const StickyNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [links] = useState(navLinks);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [isHamburgerLinksToggled, setIsHamburgerLinksToggled] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState("#HOME");
  const [contactHover, setContactHover] = useState(false);
  // const [activeSection, setIsActiveSection] = useState("#HOME");

  const callAnimation = () => {
    setContactHover(true);
  };

  const stopCallAnimation = () => {
    setContactHover(false);
  };

  let location = useLocation();

  const handleScroll = () => {
    let offset = window.scrollY;
    if (offset > 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const checkHamburgerClicked = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
    setIsHamburgerLinksToggled(!isHamburgerLinksToggled);
  };

  const checkHamburgerLinksClosed = () => {
    setIsHamburgerClicked(false);
    setIsHamburgerLinksToggled(false);
  };

  return (
    <>
      <header className={navbar ? "navbar shadow" : "navbar"}>
        <div className="intro-logo">
          <a
            href={location?.pathname != "/" ? "/" : `${location?.pathname}`}
            className={isHamburgerClicked && "change-logo-color-1"}
          >
            S<span>C</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="#Contact">
            {" "}
            {/* <button>
                Contact me!
                </button> */}
            <motion.button
              className="button"
              whileTap={{ scale: 0.85 }}
              onMouseOver={() => callAnimation()}
              onMouseLeave={() => stopCallAnimation()}
            >
              {/* <button> */}
              Contact me!
              {/* </button> */}
              <div
                className={`${
                  contactHover ? "call-logo call-logo-animate" : "call-logo "
                }`}
              >
                <img src={callLogo} alt="call" />
              </div>
            </motion.button>
          </a>
          {/* <ul>
            {links.map((link) => {
              const { id, title, url } = link;
              return (
                <li key={id}>
                  <a
                    href={url}
                    onClick={() => setIsItemClicked(url)}
                    className={`${url === isItemClicked ? "active" : ""}`}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul> */}
        </div>

        <div
          className={
            isHamburgerClicked
              ? "hamburger-links hide hamburger-links-toggle"
              : "hamburger-links hide"
          }
        >
          <ul>
            {links.map((link) => {
              const { id, title, url } = link;
              return (
                <li key={id} onClick={checkHamburgerLinksClosed}>
                  <a href={url} className={title}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={
            isHamburgerClicked ? "hamburger change hide" : "hamburger hide"
          }
          onClick={checkHamburgerClicked}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </header>
    </>
  );
};

export default StickyNavbar;
