import React, { createContext, useState } from "react";
import App from "../App";
export const ThemeContext = createContext();
export const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <App />
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
