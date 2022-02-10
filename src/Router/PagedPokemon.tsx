import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IPokemon } from "../interfaces";

import Table from "../Components/Table";
import { getPokemons } from "../services/api";
import FormSearch from "../Components/FormSearch";

const PagedPokemon = () => {
  const navigate = useNavigate();
  const { page } = useParams();

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [perPage] = useState<number>(30);

  useEffect(() => {
    async function fetchData() {
      const allPokemons = (await getPokemons()).filter((AP, index, arr) => {
        if (index === 0) return true;
        if (AP.national_number !== arr[index - 1].national_number) {
          return true;
        }
        return false;
      });
      const allPokemonsLength = allPokemons.length;

      if (page) {
        const pageNumber = Number(page);
        const maxPages = Math.ceil(allPokemonsLength / perPage);
        if (pageNumber <= 0) navigate(`/pagina/1`);
        if (pageNumber > maxPages) navigate(`/pagina/${maxPages}`);
        const pagedPokemons = () => {
          const maxPokemon = pageNumber === 1 ? perPage : pageNumber * perPage;
          const minPokemon = pageNumber === 1 ? 0 : maxPokemon - perPage;

          const newListPokemon = [] as IPokemon[];

          for (
            let i = minPokemon;
            i < maxPokemon && i < allPokemonsLength;
            i++
          ) {
            newListPokemon.push(allPokemons[i]);
          }

          return newListPokemon;
        };
        setPokemonList(pagedPokemons);
        return;
      }
      setPokemonList(allPokemons);
    }
    fetchData();
  }, [navigate, page, perPage]);

  return (
    <>
      <FormSearch />
      <Table pokemonList={pokemonList} />
    </>
  );
};

export default PagedPokemon;
