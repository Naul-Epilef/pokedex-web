import { IPokemonType } from "../../interfaces";
import {
  TypeBug,
  TypeDark,
  TypeDragon,
  TypeElectric,
  TypeFairy,
  TypeFighting,
  TypeFire,
  TypeFlying,
  TypeGhost,
  TypeGrass,
  TypeGround,
  TypeIce,
  TypeNormal,
  TypePoison,
  TypePsychic,
  TypeRock,
  TypeSteel,
  TypeWater,
} from "./styles";

const PokemonType = ({ type }: IPokemonType) => {
  switch (type) {
    case "Bug":
      return <TypeBug>{type}</TypeBug>;
    case "Dark":
      return <TypeDark>{type}</TypeDark>;
    case "Dragon":
      return <TypeDragon>{type}</TypeDragon>;
    case "Electric":
      return <TypeElectric>{type}</TypeElectric>;
    case "Fairy":
      return <TypeFairy>{type}</TypeFairy>;
    case "Fighting":
      return <TypeFighting>{type}</TypeFighting>;
    case "Fire":
      return <TypeFire>{type}</TypeFire>;
    case "Flying":
      return <TypeFlying>{type}</TypeFlying>;
    case "Ghost":
      return <TypeGhost>{type}</TypeGhost>;
    case "Grass":
      return <TypeGrass>{type}</TypeGrass>;
    case "Ground":
      return <TypeGround>{type}</TypeGround>;
    case "Ice":
      return <TypeIce>{type}</TypeIce>;
    case "Normal":
      return <TypeNormal>{type}</TypeNormal>;
    case "Poison":
      return <TypePoison>{type}</TypePoison>;
    case "Psychic":
      return <TypePsychic>{type}</TypePsychic>;
    case "Rock":
      return <TypeRock>{type}</TypeRock>;
    case "Steel":
      return <TypeSteel>{type}</TypeSteel>;
    case "Water":
      return <TypeWater>{type}</TypeWater>;
  }
  return <span>{type}</span>;
};

export default PokemonType;
