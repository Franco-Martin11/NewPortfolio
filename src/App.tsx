import { Stack } from "@chakra-ui/react";
import "./App.css";
import Routes from "./routes/Routes";

function App() {
  return (
    <Stack
      as="main"
      minH={"100vh"}
      zIndex={"banner"}
    >
      <Routes />
    </Stack>
  );
}

export default App;
