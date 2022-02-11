import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FormSearchStyled } from "./styles";

const InputSearch = () => {
  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState<string>("");

  function handleSearch(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      navigate(`/${inputSearch}`);
    }
  }

  function handleClickSearch() {
    navigate(`/${inputSearch}`);
  }

  return (
    <FormSearchStyled>
      <div>
        <input
          type="text"
          placeholder="Nome ou número"
          onKeyUp={handleSearch}
          onChange={(event) => setInputSearch(event.target.value)}
          value={inputSearch}
        />
        <button onClick={handleClickSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <span>Pesquise pelo nome do pokémon ou pelo número da pokedex</span>
    </FormSearchStyled>
  );
};

export default InputSearch;
