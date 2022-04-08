import React, { useState, useContext, createContext, useEffect } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

const DarkMode = ({ children }) => {
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkMode;
