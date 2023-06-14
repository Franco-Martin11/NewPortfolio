import { Stack } from "@chakra-ui/react";
import CardHeading from "./components/CardHeading";
import AnchoreBox from "./components/AnchoreBox";
import HeadingHero from "./components/HeadingHero";

const Hero = () => {
  return (
    <Stack
      position="relative"
      px={[4, 6, "12", 10]}
      pt={["20", "24"]}
      pb={4}
      as="section"
      spacing="none"
      color="white"
      flexDir={["column-reverse", "column"]}
      justifyContent={["center", "flex-start"]}
      alignItems="center"
      gap={[10, 8]}
      minH="100vh"
      m="0 auto !important"
      w="full"
    >
      <CardHeading />
      <AnchoreBox />
      <HeadingHero />
    </Stack>
  );
};

export default Hero;
