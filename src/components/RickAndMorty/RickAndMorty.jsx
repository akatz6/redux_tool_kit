import { useEffect, useState } from "react";
import { useGetCharactersQuery } from "./RickAndMortySlice";

export default function RickAndMorty() {
  const { data, isSuccess } = useGetCharactersQuery();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (data) {
      const temp = JSON.parse(data);
      setCharacters(temp.results);
    }
  }, [isSuccess]);

  return (
    <div>
      {isSuccess &&
        characters?.map((character) => {
          return (
            <div key={character.id}>
              <h1>{character.name}</h1>
              <img src={character.image} alt="" />
              <p>{character.species}</p>
            </div>
          );
        })}
    </div>
  );
}
