import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#4e3505",
      main: "#cdb693",
    },
    secondary: {
      main: "#4e3505",
      light: "#fffaf2",
    },
    tertiary: {
      main: "#4e3505",
      // main: "#CD9993",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    body1: {
      lineHeight: "2rem",
      fontFamily: ["Raleway", "sans-serif"].join(","),
      // marginBottom: "2rem",
    },
    body2: {
      lineHeight: "1.4rem",
      // marginBottom: "2rem",
    },
    h1: {
      fontWeight: "700",
      fontSize: "3.1rem",
      marginBottom: "2rem",
      color: "#4e3505",
    },
    h2: {
      fontWeight: "700",
      fontSize: "2.2rem",
      marginBottom: "1rem",
      marginTop: "1rem",
      color: "#4e3505",
    },
    h5: {
      fontWeight: "bold",
      // textTransform: "uppercase",
    },
    h6: {
      fontWeight: "bold",
      lineHeight: "1.3",
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
  },
  props: {
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
    MuiIconButton: {
      disableRipple: false,
    },
  },
});
