// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
const colors = {
  palette: {
    main: "#f5701f",
    secondary: "#1e1d1f",
    heading: "#e9e5de",
    body: "#716e6e",
    accent: "#5c63c0",
  },
};
const theme = extendTheme({ colors });

export default theme;
