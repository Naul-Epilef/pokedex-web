import { IPokemon } from "../interfaces";

export async function getPokemons(): Promise<IPokemon[]> {
  return fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      return resJson.results as IPokemon[];
    });
}
