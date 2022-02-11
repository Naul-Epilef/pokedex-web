import { ILocalStorage, ITable } from "../../interfaces";

import {
  validateFavorites,
  getFavorites,
  setFavorites,
} from "../../services/localStorage";

const Table = ({ pokemonList, isFavorite, updateStorage }: ITable) => {
  function handleToggleFavorite(id: string, national_number: string) {
    if (validateFavorites()) {
      const storage = getFavorites();

      if (!storage.favs.includes(national_number)) {
        storage.favs.push(national_number);
        storage.favs.sort();
        document.getElementById(id)!.innerHTML = "Desfavoritar";
      } else {
        const index = storage.favs.indexOf(national_number);
        storage.favs.splice(index, 1);
        document.getElementById(id)!.innerHTML = "Favoritar";
      }

      setFavorites(storage);

      if (isFavorite) {
        if (updateStorage) {
          updateStorage();
        }
      }
      return;
    }
    const storage = { favs: [] } as ILocalStorage;
    storage.favs.push(national_number);
    setFavorites(storage);
  }

  function handleShowFavorites() {
    if (validateFavorites()) {
      console.log(getFavorites());
    }
  }
  return (
    <ul>
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <li key={pokemon.national_number + "." + pokemon.evolution?.name}>
            <ul>
              <li
                key={
                  pokemon.national_number +
                  "." +
                  pokemon.evolution?.name +
                  ".img"
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
                // onClick={() => handleFavorite(pokemon.national_number)}
              >
                {`${pokemon.name} ${pokemon.national_number}`}
                <button
                  id={`${pokemon.name}.${pokemon.national_number}`}
                  onClick={() =>
                    handleToggleFavorite(
                      `${pokemon.name}.${pokemon.national_number}`,
                      pokemon.national_number
                    )
                  }
                >
                  {pokemon.isFavorite ? "Desfavoritar" : "Favoritar"}
                </button>
                <button onClick={() => handleShowFavorites()}>Mostrar</button>
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
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default Table;
