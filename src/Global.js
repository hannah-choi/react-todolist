import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
    button,
    input:not([type="text"], [type="checkbox"]) {
        border: 1px solid ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
}

    button:hover,
    input:not([type="text"], [type="checkbox"]):hover {
        color: ${({ theme }) => theme.body};
        background-color: ${({ theme }) => theme.text};
}

    .slider {
        background-color: ${({ theme }) => theme.text};
    }
  
  `;
