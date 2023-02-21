import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  
  body {
    background-color: ${(props): string => props.theme.gray[800]};
  }
`
