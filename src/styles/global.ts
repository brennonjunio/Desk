import { createGlobalStyle } from "styled-components";

import background from "../assets/background.png";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
      background: url(${background}) no-repeat scroll;
      color: ${({ theme }) => theme.COLORS.WHITE};
      -webkit-font-smoothing: antialiased;
      font-family: "Poppins", sans-serif;
    }
    body, input, button, textarea {
    font-size: 1rem;
    outline: none;
    }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
