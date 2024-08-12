import { useEffect, useState } from "react";
import "./App.css";
import StickyNavbar from "./components/StickyNavbar/StickyNavbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import { Route, Routes } from "react-router-dom";
import Project from "./components/Projects/Project.js";
import ContactBanner from "./components/Contact-Banner/ContactBanner.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
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
    );
  }

  return (
    <>
      <StickyNavbar />
      <ContactBanner />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="app">
              <Home />
              <About />
              <Works />
              <Contact />
              <Socials />
            </div>
          }
        />
        <Route exact path="/project/:projectId" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
