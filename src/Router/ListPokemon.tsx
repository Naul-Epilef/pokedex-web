import { KeyboardEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Table from "../Components/Table";

import { IPokemon } from "../interfaces";

const ListPokemon = ({ listType }: { listType: "default" | "search" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { page, search } = useParams();

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [perPage] = useState<number>(30);

  const [inputSearch, setInputSearch] = useState<string>(
    listType === "search" ? location.pathname.split("/")[1] : ""
  );

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
        if (listType === "default") {
          if (index === 0) return true;
          if (AP.national_number !== arr[index - 1].national_number) {
            return true;
          }
          return false;
        } else if (listType === "search") {
          if (search) {
            const regex = /[0-9]/;
            if (regex.test(search)) {
              if (AP.national_number === search.padStart(3, "0")) {
                return true;
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
  }, [listType, location.pathname, navigate, page, perPage, search]);

  function handleSearch(event?: KeyboardEvent<HTMLInputElement>) {
    if (event?.key === "Enter") {
      navigate(`/${inputSearch}`);
    }
  }

  function handleClickSearch() {
    navigate(`/${inputSearch}`);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Pesquise pelo nome ou número da pokedex"
        style={{ width: "1000px", height: "50px" }}
        onKeyUp={handleSearch}
        onChange={(event) => setInputSearch(event.target.value)}
        value={inputSearch}
      />
      <button onClick={handleClickSearch}>Pesquisar</button>
      <Table pokemonList={pokemonList} />
    </>
  );
};

export default ListPokemon;
