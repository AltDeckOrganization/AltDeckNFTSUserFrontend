import React, { useState, useContext, createContext, useEffect } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

const DarkMode = ({ children }) => {
  const [darkMode, setdarkMode] = useState();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setdarkMode(true);
    } else {
      setdarkMode(false);
    }
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, setdarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkMode;
