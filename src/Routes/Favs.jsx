import React, { useContext } from "react";
import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { ThemeContext } from "../Components/ThemeProvider";
const Favs = () => {
  const { favs } = useCharStates();
  const {theme, toggleTheme} =useContext(ThemeContext) // Acceder al estado y la función toggle

  
  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

