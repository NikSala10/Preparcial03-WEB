import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCharacter, type Character } from "../redux/slices/characterSlice";
import type { RootState } from "../redux/store";
import { useEffect, useState } from "react";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const { id } = useParams<{ id: string }>();

  const characters = useSelector((state: RootState) => state.character.characters);
  const characterToEdit = characters.find((c) => c.id.toString() === id);

  useEffect(() => {
    if (characterToEdit) {
      setName(characterToEdit.name);
      setStatus(characterToEdit.status || "");
      setSpecies(characterToEdit.species || "");
    }
  }, [characterToEdit]);

  const handleEdit = () => {
    if (!characterToEdit) return;

    const updatedCharacter: Character = {
      ...characterToEdit,
      name: name,
      status: status,
      species: species,
    };

    dispatch(editCharacter(updatedCharacter));
    alert("Personaje editado con éxito");
    navigate("/home"); 
  };

  if (!characterToEdit) {
    return <p>No se encontró el personaje que deseas editar.</p>;
  }

  return (
    <>
      <h1>Edita el personaje</h1>
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
      <button type="button" onClick={handleEdit}>Guardar Cambios</button>
    </>
  );
};

export default Edit;