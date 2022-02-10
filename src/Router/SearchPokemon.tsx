import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import FormSearch from "../Components/FormSearch";
import Table from "../Components/Table";

import { IPokemon } from "../interfaces";

import { getPokemons } from "../services/api";

const SearchPokemon = () => {
  const navigate = useNavigate();
  const { search } = useParams();

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const allPokemons = (await getPokemons()).filter((AP, index, arr) => {
        if (search) {
          const regex = /[0-9]/;
          if (regex.test(search)) {
            if (AP.national_number === search.padStart(3, "0")) {
              if (index === 0) return true;
              if (AP.national_number !== arr[index - 1].national_number) {
                return true;
              }
            }
          }
          if (AP.name.toLowerCase().includes(search)) {
            if (index === 0) return true;
            if (AP.national_number !== arr[index - 1].national_number) {
              return true;
            }
          }
        }
        return false;
      });

      setPokemonList(allPokemons);
    }
    fetchData();
  }, [navigate, search]);

  return (
    <>
      <FormSearch />
      <Table pokemonList={pokemonList} />
    </>
  );
};

export default SearchPokemon;
