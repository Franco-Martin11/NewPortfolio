import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <SimpleGrid
      minChildWidth="350px"
      placeItems="center"
      p={4}
      pt={"20"}
      m={"0 !important"}
      as="section"
      color="white"
      spacing={"none"}
      minH="100vh"
      className="bgSvg"
      gap={4}
    >
      <Box h={"fit-content"}>
        <Heading fontSize="48px" fontWeight="extrabold" as="h1">
          Hi, I’m Franco Martin
        </Heading>
        <Heading fontWeight="bold" color="orange.500" fontSize="32px" as="h3">
          Frontend Developer
        </Heading>
        <Text mt={4} fontSize="20px">
          Passionate to craft usable &amp; amazing digital product.
        </Text>
      </Box>
      <ButtonGroup h={"fit-content"} gap={4} spacing={0}>
        <Button variant={"primary"}>Contact me</Button>
        <Button variant={"outlineLink"}>Github</Button>
      </ButtonGroup>
    </SimpleGrid>
  );
};

export default Hero;
