import { ITable } from "../../interfaces";

const Table = ({ pokemonList }: ITable) => {
  return (
    <ul>
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <li key={pokemon.national_number + "." + pokemon.evolution?.name}>
            <ul>
              <li
                key={
                  pokemon.national_number +
                  "." +
                  pokemon.evolution?.name +
                  ".img"
                }
              >
                <img src={pokemon.sprites.large} alt={pokemon.name} />
                <img src={pokemon.sprites.normal} alt={pokemon.name} />
                <img src={pokemon.sprites.animated} alt={pokemon.name} />
              </li>
              <li
                key={
                  pokemon.national_number +
                  "." +
                  pokemon.evolution?.name +
                  ".infos"
                }
              >
                {pokemon.name} {pokemon.national_number}
              </li>
              <li
                key={
                  pokemon.national_number +
                  "." +
                  pokemon.evolution?.name +
                  ".type"
                }
              >
                {pokemon.type.map((type, index, arr) => {
                  if (index + 1 === arr.length) {
                    return (
                      <span
                        key={
                          pokemon.national_number +
                          "." +
                          pokemon.evolution?.name +
                          ".type." +
                          type
                        }
                      >
                        {type + " "}
                      </span>
                    );
                  }
                  return (
                    <span
                      key={
                        pokemon.national_number +
                        "." +
                        pokemon.evolution?.name +
                        ".type." +
                        type
                      }
                    >
                      {type + ", "}
                    </span>
                  );
                })}
              </li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default Table;
