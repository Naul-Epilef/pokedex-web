import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchPokemon from "./SearchPokemon";
import ListPokemon from "./ListPokemon";
import NotFound from "./NotFound";
import PagedPokemon from "./PagedPokemon";
import FavoritePokemon from "./FavoritedPokemon";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/pagina/:page"
          element={<ListPokemon listType="default" />}
        /> */}
        {/* <Route path="/:search" element={<ListPokemon listType="search" />} /> */}
        <Route path="/favoritos" element={<FavoritePokemon />} />
        <Route path="/lista" element={<ListPokemon />} />
        <Route path="/pagina/:page" element={<PagedPokemon />} />
        <Route path="/:search" element={<SearchPokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
