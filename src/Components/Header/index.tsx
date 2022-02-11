import { HeaderStyled } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListOl,
  faList,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
// import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <HeaderStyled>
      <ul>
        <li>
          <FontAwesomeIcon icon={faListOl} />
          <a href="/pagina/1">Paginada</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faList} />
          <a href="/lista">Lista</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faBookmark} />
          <a href="/favoritos">Favoritos</a>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
