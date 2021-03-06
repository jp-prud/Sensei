import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth:
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.background}
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: inherit;
    border: none;
    outline: none;
  }

  #root {
    height: 100%;
  }
`;
