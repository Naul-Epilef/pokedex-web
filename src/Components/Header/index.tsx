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
          <a href="/pagina/1">
            <FontAwesomeIcon icon={faListOl} />
            Paginada
          </a>
        </li>
        <li>
          <a href="/lista">
            <FontAwesomeIcon icon={faList} />
            Lista
          </a>
        </li>
        <li>
          <a href="/favoritos">
            <FontAwesomeIcon icon={faBookmark} />
            Favoritos
          </a>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
