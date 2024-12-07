import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  console.log(params);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = "https://rickandmortyapi.com/api/character/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setChar(res.data);
    });
  }, []);
  
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{char.name}</h2>
      <img src={char.image} alt="" />
      <h4>Status: {char.status}</h4>
      <h4>Especie: {char.species}</h4>
    </>
  )
}

export default Detail