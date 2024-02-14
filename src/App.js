import { useEffect, useState } from "react";
import "./App.css";
import StickyNavbar from "./components/StickyNavbar/StickyNavbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";

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
      <Home />
      <About />
      <Works />
      <Contact />
      <Socials />
    </>
  );
}

export default App;
