import { Container, HStack } from "@chakra-ui/react";

import { HeaderSection, ProjectCard } from "./components";
import { ProjectExampleData } from "../../../constant/data";
import { ProjectProps } from "../../../types/types";

const Projects = () => {
  return (
    <Container id="projects" variant={"section"} as={"section"}>
      <HeaderSection />
      <HStack
        flexWrap={"wrap"}
        gap={{ base: 14, md: 8 }}
        w={"full"}
        maxW={{ base: "1250px", xl: "1500px" }}
        margin={"0 auto"}
        my={8}
        px={{ sm: 4 }}
      >
        {ProjectExampleData.map((project: ProjectProps) => (
          <ProjectCard
            key={project.descriptions.numberProject}
            descriptions={project.descriptions}
            image={project.image}
            route={project.route}
            hyperLink={project.hyperLink}
          />
        ))}
      </HStack>
    </Container>
  );
};

export default Projects;
