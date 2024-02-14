import { createContext, useContext, useState } from "react";

const ScrollSpyContext = createContext();

export const useScrollSpy = () => {
  return useContext(ScrollSpyContext);
};

const ScrollSpyProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("#Home");

  return (
    <ScrollSpyContext.Provide value={{ activeLink, setActiveLink }}>
      {children}
    </ScrollSpyContext.Provide>
  );
};

export default ScrollSpyProvider;
