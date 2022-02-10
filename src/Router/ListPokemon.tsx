import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Table from "../Components/Table";

import { IPokemon } from "../interfaces";

const ListPokemon = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [perPage, setPerPage] = useState<number>(30);
  const navigate = useNavigate();
  const { page } = useParams();

  async function getPokemons(): Promise<IPokemon[]> {
    return fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        return resJson.results as IPokemon[];
      });
  }

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
        if (pageNumber > maxPages) navigate(`/lista/pagina/${maxPages}`);
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

  return <Table pokemonList={pokemonList} />;
};

export default ListPokemon;
