import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    </>
  );
};

export default InputSearch;
