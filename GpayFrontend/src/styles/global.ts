import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

  body {
    padding: 0;
    margin: 0;
    background: #f5f5f5;
    font-family: "Inter", sans-serif;
    color: #021c47
  }
`;

export const GlobalButton = styled.button`
    background: #2447b5;
    color: #ffff;
    width: 262px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 3px;
    padding: 16px 50px;
    border: none;
    cursor: pointer;
    &:hover {
    background: #3680ff;
    transition: 0.5s;
  }
`;
