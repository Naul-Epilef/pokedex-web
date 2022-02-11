import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: "Flexo-Medium",arial,sans-serif;
}

body {
    background: url(" https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png");
}
`;

export { GlobalStyle };
