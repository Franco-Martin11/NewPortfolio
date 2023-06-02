import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Projects from "../Project/Projects";



const Hero = () => {
  return (
    <Stack
      py={8}
      px={4}
      pt={20}
      m={"0 !important"}
      as="section"
      spacing={"none"}
      className="bgSvg"
      color="white"
      justifyContent="center"
      minH="100vh"
      gap={8}
    >
      <Box>
        <Heading fontSize="48px" fontWeight="extrabold" as="h1">
          Hi, I’m Franco Martin
        </Heading>
        <Heading fontWeight="bold" color="orange.500" fontSize="32px" as="h3">
          Frontend Developer
        </Heading>
      </Box>
      <Text fontSize="20px">
        Passionate to craft usable &amp; amazing digital product.
      </Text>
      <ButtonGroup gap={4} spacing={0}>
        <Button>Contact me</Button>
        <Button variant={"outlineLink"}>Github</Button>
      </ButtonGroup>
      <Button variant={"secondary"}>Repository</Button>
      <Projects/>
    </Stack>
  );
};

export default Hero;
