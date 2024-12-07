import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

// se cambio  Card = ({ name, username, id }) por char
const Card = ({ char }) => {
  const { setFavs } = useCharStates();
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    alert(`Dentista ${char.name} fue agregado a favoritos.`);
    setFavs((favs) => [...favs, char]);
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link to={`/detail/${char.id}`}>
        <img src="/public/images/doctor.jpg" width={200} alt="" />
      </Link>
      <h3>{char.name}</h3>
      <p>{char.username}</p>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
