import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --green: #3c735f;
    --yellow: #f2cb05;
    --yellow-title: #f8ffa4;
    --orange: #f2a922;
    --orange-text: #b67c34;
    --red: #a62f26;
    --white: #dadada;
    --white-border: #b2b2b2;
    --black: #212121;
    --black-border: #161515;
    --black-mirror: rgba(12, 12, 12, 0.75);
    --gray: #202020;
    --gray-dark: #181818;
    --gray-light: #373737;

    --gray-90: rgba(75, 75, 75, 0.9);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    font-family: Candara;
  }
`;
 
export default GlobalStyle;