import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Cta from "../Cta";
import ProjectCard from "../Project/Project";
import { Project } from "../../types/types";

const projectData: Project[] = [
  {
    title: "prueba",
    imageSource: "./image5.jpg",
    imageAlternate: "string",
    routes: [{ url: "string", title: "string", id: 22 }],
  },
  {
    title: "prueba2",
    imageSource: "./image6.jpg",
    imageAlternate: "string2",
    routes: [{ url: "string", title: "string", id: 22 }],
  },
  {
    title: "prueba",
    imageSource: "./image5.jpg",
    imageAlternate: "string",
    routes: [{ url: "string", title: "string", id: 22 }],
  },
  {
    title: "prueba2",
    imageSource: "./image6.jpg",
    imageAlternate: "string2",
    routes: [{ url: "string", title: "string", id: 22 }],
  },
];

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
      <ButtonGroup gap={4} colorScheme="orange" size="lg" spacing={0}>
        <Button borderTopWidth={2} borderColor="white">
          Contact me
        </Button>
        <Button _hover={{ backgroundColor: "orange.100" }} variant="outline">
          Github
        </Button>
        <Cta title="Repository" url="/project" />
      </ButtonGroup>
      <SimpleGrid minChildWidth="250px" spacing="10" justifyItems="center">
        {projectData.map((projectData, index) => (
          <ProjectCard
            key={index}
            imageAlternate={projectData.imageAlternate}
            imageSource={projectData.imageSource}
            title={projectData.title}
            routes={projectData.routes}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Hero;
