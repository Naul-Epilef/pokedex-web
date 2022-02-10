import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPokemon from "./ListPokemon";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/lista" element={<ListPokemon />} /> */}
        <Route
          path="/pagina/:page"
          element={<ListPokemon listType="default" />}
        />
        <Route path="/:search" element={<ListPokemon listType="search" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
