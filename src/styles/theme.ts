import { createTheme } from "@mui/material/styles";
import colors from "./tokens/colors";

const { palette } = createTheme();
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  palette: {
    ...colors,
    title: palette.augmentColor({
      color: {
        main: "#486284",
      },
    }),
    secondary: palette.augmentColor({
      color: {
        main: "#D9D9D9",
      },
    }),
    tertiary: palette.augmentColor({
      color: {
        main: "#E1216D",
      },
    }),
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    title: Palette["primary"];
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    title?: PaletteOptions["primary"];
    tertiary?: PaletteOptions["primary"];
  }
}

export default theme;
