import { useDispatch } from "react-redux";
import { addCharacter, type Character } from "../redux/slices/characterSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

   const handleCreate = () => {
    if (!name || !status || !species) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const newCharacter: Character = {
      id: Date.now().toString(),
      name,
      status,
      species,
    };

    dispatch(addCharacter(newCharacter));
    alert("Personaje creado con éxito");
    navigate("/home");
  };


  return (
    <>
      <h1>Crea el personaje</h1>
      <button type="button" onClick={() => navigate(-1)}>Volver</button>
      
      <input
      placeholder="Ingresa el name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <input
      placeholder="Ingresa el status"
      type="text"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      />
      <input
      placeholder="Ingresa la specie"
      type="text"
      value={species}
      onChange={(e) => setSpecies(e.target.value)}
      />
      <button type="button" onClick={handleCreate}>Crear</button>
    
    </>
  );
};


export default Create;
