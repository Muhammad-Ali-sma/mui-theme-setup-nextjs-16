"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#0F62FE" },
        secondary: { main: "#6929C4" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#7CA9FF" },
        secondary: { main: "#B490E8" },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
