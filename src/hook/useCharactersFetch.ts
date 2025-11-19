import { useState, useEffect } from "react";

const useCharacter = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    //Option 1
    useEffect(() => {
    const getRickandMorty = async () => {
      try {
        const datos = await fetch('https://rickandmortyapi.com/api/character?pages=20').then((res) => res.json());
        setCharacters(datos.results);
      } catch {
        setError( 'Error fetching ricky and morty' );
      } finally {
        setLoading(false);
      }
    }
    getRickandMorty();
  },[])

  return { characters, error, loading }
}

export default useCharacter;