const { createTheme } = require("@mui/material");

export const theme = createTheme({
  palette: {
    primary: { main: "#6D2077" },
    mode: 'dark'
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "white",
      },
    },
  },
});
