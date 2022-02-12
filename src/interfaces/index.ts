export interface IPokemon {
  national_number: string;
  evolution?: {
    name: string;
  };
  sprites: {
    normal: string;
    large: string;
    animated: string;
  };
  name: string;
  type: string[];
  isFavorite: boolean;
}

export interface ITable {
  pokemonList: IPokemon[];
  isFavorite?: false | boolean;
  updateStorage?(): void;
}

export interface IPokemonType {
  type: string;
}

export interface ILocalStorage {
  favs: string[];
}
