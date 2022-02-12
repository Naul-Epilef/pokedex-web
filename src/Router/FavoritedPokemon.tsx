import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPokemons } from "../services/api";
import { getFavorites, validateFavorites } from "../services/localStorage";
import { ILocalStorage, IPokemon } from "../interfaces";

import FormSearch from "../Components/FormSearch";
import Table from "../Components/Table";

const FavoritePokemon = () => {
  const navigate = useNavigate();
  const [isFavsValidate, setIsFavsValidate] = useState<boolean>(
    validateFavorites()
  );
  const [storage, setStorage] = useState<ILocalStorage>(
    isFavsValidate ? getFavorites() : { favs: [], perPage: 30 }
  );

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const allPokemons = (await getPokemons()).filter((AP, index, arr) => {
        if (storage.favs.includes(AP.national_number)) {
          if (index === 0) return true;
          if (AP.national_number !== arr[index - 1].national_number) {
            return true;
          }
          return false;
        }
        return false;
      });

      setPokemonList(allPokemons);
    }
    fetchData();
  }, [navigate, storage.favs]);

  function updateStorage() {
    setIsFavsValidate(validateFavorites());
    setStorage(isFavsValidate ? getFavorites() : { favs: [], perPage: 30 });
  }

  return (
    <>
      <FormSearch />
      <Table
        pokemonList={pokemonList}
        isFavorite={true}
        updateStorage={updateStorage}
      />
    </>
  );
};

export default FavoritePokemon;
