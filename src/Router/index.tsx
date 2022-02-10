import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPokemon from "./ListPokemon";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/lista" element={<ListPokemon />} /> */}
        <Route path="/lista/pagina/:page" element={<ListPokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
