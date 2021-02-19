import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4e3505",
      main: "#cdb693",
    },
    secondary: {
      main: "#4e3505",
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
      fontFamily: ["Raleway", "sans-serif"].join(","),
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
    },
  },
});
