const { createTheme } = require("@mui/material");

export const theme = createTheme({
  palette: {
    primary: { main: "#6D2077" }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "white",
      },
    },
  },
});
