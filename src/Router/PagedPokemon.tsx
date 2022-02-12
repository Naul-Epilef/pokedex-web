import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPokemons } from "../services/api";
import { getPerPage, validateFavorites } from "../services/localStorage";

import { IPokemon } from "../interfaces";

import Table from "../Components/Table";
import FormSearch from "../Components/FormSearch";
import Pagination from "../Components/Pagination";

const PagedPokemon = () => {
  const navigate = useNavigate();
  const { page } = useParams();

  const [allPokemonsLength, setAllPokemonsLength] = useState<number>(817);

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [perPage] = useState<number>(validateFavorites() ? getPerPage() : 30);

  useEffect(() => {
    async function fetchData() {
      const allPokemons = (await getPokemons()).filter((AP, index, arr) => {
        if (index === 0) return true;
        if (AP.national_number !== arr[index - 1].national_number) {
          return true;
        }
        return false;
      });
      setAllPokemonsLength(allPokemons.length);

      const pageNumber = Number(page);
      const maxPages = Math.ceil(allPokemons.length / perPage);
      if (pageNumber <= 0) navigate(`/pagina/1`);
      if (pageNumber > maxPages) navigate(`/pagina/${maxPages}`);
      const pagedPokemons = () => {
        const maxPokemon = pageNumber === 1 ? perPage : pageNumber * perPage;
        const minPokemon = pageNumber === 1 ? 0 : maxPokemon - perPage;

        const newListPokemon = [] as IPokemon[];

        for (
          let i = minPokemon;
          i < maxPokemon && i < allPokemons.length;
          i++
        ) {
          newListPokemon.push(allPokemons[i]);
        }

        return newListPokemon;
      };
      setPokemonList(pagedPokemons());
      return;
    }
    fetchData();
  }, [allPokemonsLength, navigate, page, perPage]);

  return (
    <>
      <FormSearch />
      <Table
        pokemonList={pokemonList}
        Pagination={
          <Pagination
            pokemonLength={allPokemonsLength}
            pageNumber={Number(page)}
            perPage={perPage}
          />
        }
      />
    </>
  );
};

export default PagedPokemon;
