import { IPokemon } from "../interfaces";
import { getFavorites, validateFavorites } from "./localStorage";

export async function getPokemons(): Promise<IPokemon[]> {
  return fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      const results = resJson.results as IPokemon[];
      const storage = validateFavorites() ? getFavorites() : { favs: [] };
      results.map((result) => {
        if (storage.favs.includes(result.national_number)) {
          result.isFavorite = true;
          return true;
        }

        result.isFavorite = false;
        return true;
      });
      return results;
    });
}
