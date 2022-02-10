import { useEffect, useState } from "react";

interface Pokemon {
  national_number: string;
  evolution?: {
    name: string;
  };
  sprites: {
    normal: string;
    large: string;
    animated: string;
  };
  name: string;
  type: [string, string];
}

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();
  async function getPokemons(): Promise<Pokemon[]> {
    return fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        return resJson.results as Pokemon[];
      });
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getPokemons();
      setPokemonList(res);
    }
    fetchData();
  }, []);
  return (
    <ul>
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <div key={pokemon.national_number + "." + pokemon.evolution?.name}>
            <li
              key={
                pokemon.national_number + "." + pokemon.evolution?.name + ".img"
              }
            >
              <img src={pokemon.sprites.large} alt={pokemon.name} />
              <img src={pokemon.sprites.normal} alt={pokemon.name} />
              <img src={pokemon.sprites.animated} alt={pokemon.name} />
            </li>
            <li
              key={
                pokemon.national_number +
                "." +
                pokemon.evolution?.name +
                ".infos"
              }
            >
              {pokemon.name} {pokemon.national_number}
            </li>
            <li
              key={
                pokemon.national_number +
                "." +
                pokemon.evolution?.name +
                ".type"
              }
            >
              {pokemon.type.map((type, index, arr) => {
                if (index + 1 === arr.length) {
                  return (
                    <span
                      key={
                        pokemon.national_number +
                        "." +
                        pokemon.evolution?.name +
                        ".type." +
                        type
                      }
                    >
                      {type + " "}
                    </span>
                  );
                }
                return (
                  <span
                    key={
                      pokemon.national_number +
                      "." +
                      pokemon.evolution?.name +
                      ".type." +
                      type
                    }
                  >
                    {type + ", "}
                  </span>
                );
              })}
            </li>
          </div>
        ))}
    </ul>
  );
}

export default App;
