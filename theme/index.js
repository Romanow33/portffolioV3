import { createTheme } from "@mui/material/styles";
import "@fontsource/abel";
import "@fontsource/alata";

let theme = createTheme({
  scrollbarColor: "#6969dd #e0e0e0W",
  scrollbarWidth: "thin",
  typography: {
    title: {
      fontFamily: "Abel, sans-serif",
    },
    title1: {
      fontFamily: "Alata, sans-serif",
      fontSize: 30,
    },
    cardTitle: {
      fontFamily: "Alata, sans-serif",
      fontSize: 22,
    },
    subtitle1: {
      fontFamily: "Abel, sans-serif",
      fontSize: 20,
    },
    chipVariant: {
      fontFamily: "Abel, sans-serif",
      fontSize: 15,
    },
  },
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#fff",
    },
  },
});
theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default theme;
