import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #0e0e14;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  }

  #root {
    max-width: none;
    margin: 0;
    padding: 0;
    text-align: initial;
  }
`;
