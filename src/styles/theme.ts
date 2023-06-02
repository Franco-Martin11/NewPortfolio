// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";
const colors = {
  palette: {
    main: "#f5701f",
    secondary: "#1f1f1f",
    heading: "#e9e5de",
    body: "#716e6e",
    accent: "#5c63c0",
    "orangeAlpha.100": "rgb(245 112 31 / 35%)",
  },
};
const theme = extendTheme({
  colors,
  components: {
    Button,
  },
});

export default theme;
