import { Stack } from "@chakra-ui/react";
import CardHeading from "./components/CardHeading";
import AnchoreBox from "./components/AnchoreBox";
import HeadingHero from "./components/HeadingHero";

const Hero = () => {
  return (
    <Stack
      position={"relative"}
      px={{ base: 4, sm: 6, md: "12", lg: 10 }}
      pt={{ base: "20",md:"24" }}
      pb={4}
      as="section"
      spacing={"none"}
      className="bgSvg"
      color="white"
      flexDir={{ base: "column-reverse", md: "column" }}
      justifyContent={{base:"center",md: "flex-start"}}
      alignItems={"center"}
      gap={{ base: 10, md: 8 }}
      minH="100vh"
      m={"0 auto !important"}
      maxW={"1200px"}
      w={"full"}
    >
      <CardHeading />
      <AnchoreBox />
      <HeadingHero />
    </Stack>
  );
};

export default Hero;
