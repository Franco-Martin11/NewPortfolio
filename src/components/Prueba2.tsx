import { Box, Heading, Stack } from "@chakra-ui/react";
import Hero from "./Hero/Hero";
import ProjectCard from "./Project/ProjectCard";

const Prueba2 = () => {
  return (
    <Stack gap={8}>
      <Hero />
      <Box
        // backgroundSize={"cover"}
        // backgroundImage={'url("/FrameHome.svg")'}
        // backgroundPosition={"left"}
        // backgroundBlendMode="difference"
        position="relative"
        width={"full"}
        minH={"50vh"}
        // background="linear-gradient(139deg,#121220 6.53%, #1E1E1E 36.53%, #25283f 63.99%, #0E859C 165.95%)"
        // backgroundBlendMode="difference"
      >
        <Heading color={"white"}>
          Sera que esto funciona de alguna manera
        </Heading>
        <Box>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Box>
      </Box>
    </Stack>
  );
};

export default Prueba2;
