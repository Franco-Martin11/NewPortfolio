import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { Stack } from "@chakra-ui/react";

const Prueba2 = () => {
  return (
    <Stack minHeight={"100vh"} backgroundColor={"palette.mainDarkBlue"}>
      <Navbar />
      <Hero />
    </Stack>
  );
};

export default Prueba2;
