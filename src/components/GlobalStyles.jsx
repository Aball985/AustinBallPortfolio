import { createGlobalStyle } from "styled-components";
import "modern-css-reset";

export const colors = {
  black: "#292828",
  white: "#FDFDFF",
};

export const GlobalStyles = createGlobalStyle`

body{
    font-family: 'Montserrat', sans-serif;
    font-weight:700;
    font-size:700;
    background: ${colors.white};
    padding: 12rem;
}
`;
