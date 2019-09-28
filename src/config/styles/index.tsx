import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .float-right {
    float: right;
  }

  .align-flex {
    display: flex;
  }

  .margin-left-auto {
    margin-left: auto;
  }
`;
