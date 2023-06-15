import { SimpleGrid } from "@chakra-ui/react";
import { ProjectExampleData } from "../../constant/data";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing={4}
      maxW={{ base: "1250px", xl: "1500px" }}
      margin={"0 auto"}
    >
      {ProjectExampleData.map((project) => (
        <ProjectCard
          key={project.descriptions.numberProject}
          descriptions={project.descriptions}
          image={project.image}
          route={project.route}
          hyperLink={project.hyperLink}
        />
      ))}
    </SimpleGrid>
  );
};

export default Projects;
