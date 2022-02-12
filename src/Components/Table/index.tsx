import { ILocalStorage, ITable } from "../../interfaces";

import {
  validateFavorites,
  getFavorites,
  setFavorites,
} from "../../services/localStorage";

import { Card, CardBody, CardName, CardType, ContainerList } from "./styles";

import PokemonType from "../PokemonType";

const Table = ({ pokemonList, isFavorite, updateStorage }: ITable) => {
  function handleToggleFavorite(id: string, national_number: string) {
    if (validateFavorites()) {
      const storage = getFavorites();

      if (!storage.favs.includes(national_number)) {
        storage.favs.push(national_number);
        storage.favs.sort();

        document.getElementById(id)!.className = "fa-solid fa-bookmark";
      } else {
        const index = storage.favs.indexOf(national_number);
        storage.favs.splice(index, 1);
        document.getElementById(id)!.className = "fa-regular fa-bookmark";
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

  return (
    <ContainerList>
      {pokemonList &&
        pokemonList.map((pokemon, index) => {
          let isFavorite;
          if (pokemon.isFavorite) {
            isFavorite = "fa-solid fa-bookmark";
          } else {
            isFavorite = "fa-regular fa-bookmark";
          }

          return (
            <Card key={pokemon.national_number + "." + pokemon.name}>
              <div>
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.national_number}.png`}
                  alt={pokemon.name}
                />
              </div>
              <CardBody>
                <span>#{pokemon.national_number}</span>
                <CardName>
                  <span>{pokemon.name}</span>
                  <span
                    onClick={(event) =>
                      handleToggleFavorite(
                        `${pokemon.name}.${pokemon.national_number}`,
                        pokemon.national_number
                      )
                    }
                  >
                    <i
                      className={isFavorite}
                      id={`${pokemon.name}.${pokemon.national_number}`}
                    ></i>
                  </span>
                </CardName>
                <CardType>
                  {pokemon.type.map((type, index, arr) => {
                    return (
                      <PokemonType
                        key={
                          pokemon.national_number +
                          "." +
                          pokemon.evolution?.name +
                          ".type." +
                          type
                        }
                        type={type}
                      />
                    );
                  })}
                </CardType>
              </CardBody>
            </Card>
          );
        })}
    </ContainerList>
  );
};

export default Table;
