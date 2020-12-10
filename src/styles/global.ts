import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #E5E5E5;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  button {
    font-family: 'Archivo', sans-serif;
    font-size: 16px;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
`;
