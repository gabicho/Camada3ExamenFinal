import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexNum = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (user.nombre.trim().length >= 3 && regexNum.test(user.direccion)) {
      setShow(true);
      setError(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setError(true);
    }
  };
  console.log(user);
  return (
    <div>
      {show ? (
        <h4>Gracias, {user.nombre}, te contactaremos cuando antes via mail</h4>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            //   value={nombre}
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Correo electrónico"
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
          />

          <button className="favButton">Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Debe colocar la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
