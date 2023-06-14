import { Container, Stack } from "@chakra-ui/react";
import "./App.css";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Stack
      as="main"
      minH={"100vh"}
      backgroundColor={"palette.mainDarkBlue"}
    >
      <Container maxW={"1250px"} px={4} position={'relative'}>
        <Navbar />
        <Routes />
      </Container>
    </Stack>
  );
}

export default App;
