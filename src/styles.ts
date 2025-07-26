import { createGlobalStyle } from "styled-components";

export const colors = {
    beige: '#e8c39e',
    white: '#fff',
    blue: '#007bff',
    black: '#000'
}

export const GlobalCss = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      list-style: none;
    }

    body{
      background-color: ${colors.beige};
      color: ${colors.white};
      padding-top: 40px;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
  }
`