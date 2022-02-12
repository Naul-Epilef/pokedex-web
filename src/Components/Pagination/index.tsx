import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Pagination as PaginationLab } from "@material-ui/lab";

const Pagination = ({
  pokemonLength,
  pageNumber,
  perPage,
}: {
  pokemonLength: number;
  pageNumber: number;
  perPage: number;
}) => {
  const navigate = useNavigate();
  const [maxPage] = useState<number>(Math.ceil(pokemonLength / perPage));

  function handleChangePage(event: React.ChangeEvent<unknown>, page: number) {
    navigate(`/pagina/${page}`);
  }

  return (
    <PaginationLab
      count={maxPage}
      page={pageNumber}
      onChange={handleChangePage}
    />
  );
};

export default Pagination;
