import { SimpleGrid, Stack } from "@chakra-ui/react";
import Header from "./components/Header";
import ProjectCard from "./components/Project";
import { projectData } from "../../constant/data";

const Projects = () => {
  return (
    <Stack spacing={0} gap={4} p={4} as={"section"}>
      <Header />
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

export default Projects;
