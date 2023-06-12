import { Stack } from "@chakra-ui/react";
import CardHeading from "./components/CardHeading";
import AnchoreBox from "./components/AnchoreBox";

const Hero = () => {
  return (
    <Stack
      py={8}
      px={4}
      pt={"40"}
      m={"0 !important"}
      position={'relative'}
      as="section"
      spacing={"none"}
      className="bgSvg"
      color="white"
      justifyContent="center"
      minH="100vh"
      gap={8}
      alignItems={"center"}
    >
      <CardHeading />
      <AnchoreBox />
    </Stack>
  );
};

export default Hero;
