import { ILocalStorage, ITable } from "../../interfaces";

import {
  validateFavorites,
  getFavorites,
  setFavorites,
  getStorage,
  createDefaultStorage,
} from "../../services/localStorage";

import { Card, CardBody, CardName, CardType, ContainerList } from "./styles";

import PokemonType from "../PokemonType";

const Table = ({
  pokemonList,
  isFavorite,
  updateStorage,
  Pagination,
}: ITable) => {
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
    createDefaultStorage();
    const storage = getStorage() as ILocalStorage;
    storage.favs.push(national_number);
    setFavorites(storage);
  }

  return (
    <>
      <ContainerList>
        {pokemonList &&
          pokemonList.map((pokemon) => {
            let faBookmark;
            if (pokemon.isFavorite) {
              faBookmark = "fa-solid fa-bookmark";
            } else {
              faBookmark = "fa-regular fa-bookmark";
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
                        className={faBookmark}
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
      {Pagination}
    </>
  );
};

export default Table;
