import { createGlobalStyle } from "styled-components";
import "modern-css-reset";
import styled from "styled-components";

export const colors = {
  black: "#292828",
  white: "#FDFDFF",
  bg: "#2b4980",
};

export const GlobalStyles = createGlobalStyle`
  body{
      font-family: 'Montserrat', sans-serif;
      font-weight:700;
      font-size:700;
  }
`;

export const AppContainer = styled.div`
  background: ${colors.bg};
  padding: 7.5rem 15rem;
`;
