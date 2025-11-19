import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../redux/store";
import useCharacter from "../hook/useCharactersFetch";
import { addFavorites, deleteCharacter, setCharacter, type Character } from "../redux/slices/characterSlice";
import { setUserType } from "../redux/slices/userSlice";
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const {loading, characters, error} = useCharacter()
  const allCharacters = useSelector((state: RootState) => state.character.characters)
  const userType = useSelector((state: RootState) => state.user.userType);
  const favorites = useSelector((state: RootState) => state.character.favorites);

  const isFavorite = (id: string | number) => 
  favorites.some(fav => fav.id === id);

  useEffect(() => {
    if (allCharacters.length === 0 && characters.length > 0) {
      dispatch(setCharacter(characters));
    }
  }, [characters,allCharacters, dispatch]);

  const toggleRole = () => {
    const newRole = userType === "admin" ? "user" : "admin";
    dispatch(setUserType(newRole));
  };

  const filteredCharacters = allCharacters.filter((character: Character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

   const handleFav = (character: Character) => {
    dispatch(addFavorites(character));
  }

  return (
    <>
      <h1>Character List </h1>

      {userType === "admin" && (
        <button type="button" onClick={() => navigate("/create")}>Ir a Crear</button>
      )}

      <h3>Rol actual: {userType}</h3>
      <button onClick={toggleRole}>Cambiar Rol</button>
      <button onClick={() => navigate("/fav")}>Ir a Favoritos</button>

      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {!loading && !error && allCharacters.length === 0 && (
        <p>No hay personajes disponibles.</p>
      )}
      {
        filteredCharacters.map((character: Character) => (
          
          <div key={character.id}>
            
            <p>{character.id}</p>
            <h2>Name: {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Species: {character.species}</h2>
            <img src={character.image} />
            <button  style={{
              backgroundColor: isFavorite(character.id) ? "red" : "#ccc",
              color: isFavorite(character.id) ? "white" : "black"
            }}
            onClick={() => handleFav(character)}
          >
            {isFavorite(character.id) ? "❤️ Favorito" : "🤍 Favorito"}</button>
          
            {userType === "admin" && (
            <>
              <button onClick={() => dispatch(deleteCharacter(character.id))}>Eliminar</button>
              <button onClick={() => navigate(`/edit/${character.id}`)}>Editar</button>
            </>
          )}
          </div>
        ))
      }
  
    </>
);
};

export default Home;
