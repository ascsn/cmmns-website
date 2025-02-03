// src/styles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #fff7f5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #0056b3;
  }
`;

export default GlobalStyle;