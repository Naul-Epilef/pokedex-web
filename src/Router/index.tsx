import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header";
import ContainerList from "../Components/ContainerList";
import SearchPokemon from "./SearchPokemon";
import ListPokemon from "./ListPokemon";
import NotFound from "./NotFound";
import PagedPokemon from "./PagedPokemon";
import FavoritePokemon from "./FavoritedPokemon";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ContainerList>
        <Routes>
          <Route path="/favoritos" element={<FavoritePokemon />} />
          <Route path="/lista" element={<ListPokemon />} />
          <Route path="/pagina/:page" element={<PagedPokemon />} />
          <Route path="/:search" element={<SearchPokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContainerList>
    </BrowserRouter>
  );
};

export default Router;
