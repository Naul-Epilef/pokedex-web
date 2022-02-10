import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FormSearch from "../Components/FormSearch";
import Table from "../Components/Table";

import { IPokemon } from "../interfaces";

import { getPokemons } from "../services/api";

const ListPokemon = () => {
  const navigate = useNavigate();

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const allPokemons = (await getPokemons()).filter((AP, index, arr) => {
        if (index === 0) return true;
        if (AP.national_number !== arr[index - 1].national_number) {
          return true;
        }
        return false;
      });

      setPokemonList(allPokemons);
    }
    fetchData();
  }, [navigate]);

  return (
    <>
      <FormSearch />
      <Table pokemonList={pokemonList} />
    </>
  );
};

export default ListPokemon;
