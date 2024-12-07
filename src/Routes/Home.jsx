import React, { useContext } from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";
import { ThemeContext } from "../Components/ThemeProvider";
const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Acceder al estado y la función toggle
  const { chars } = useCharStates();
  return (
    <div className={theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {chars.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;
