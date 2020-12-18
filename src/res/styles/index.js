import { createGlobalStyle } from "styled-components"

export const Colors = {
  greenPrimary: "#98CA3F",
  bluePrimary: "#0A4878",
  blueSecondary: "#638CAB",
  grayPrimary: "#DEE7ED",
  graySecondary: "#F5F8FA",
  statusRed: "#D73B2F",
}

export const MainFont = {
  fontFamily: "Assistant",
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Assistant';
  }
`
