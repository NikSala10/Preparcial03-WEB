import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../redux/store";

const Favoritos = () => {
  const navigate = useNavigate();

  const allCharacters = useSelector((state: RootState) => state.character.favorites)

  return (
    <>
    <h1>Tus Favoritos</h1>
    <button  onClick={() => navigate("/")}>Ir a Home</button>
    {
        allCharacters.map((character) => (
          <div key={character.id}>
            <p>{character.id}</p>
            <h2>Name: {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Species: {character.species}</h2>
            <img src={character.image} />
          </div>
        ))
      }
    </>

);
};

export default Favoritos;