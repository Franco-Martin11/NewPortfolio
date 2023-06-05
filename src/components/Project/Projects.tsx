import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import Header from "./components/Header";
import ProjectCard from "./components/Project";
import { projectData } from "../../constant/data";
import { AiOutlineLink } from "react-icons/ai";
const Projects = () => {
  return (
    <Stack spacing={0} gap={8} as={"section"}>
      <Header />
      <SimpleGrid minChildWidth="325px" spacing="10" justifyItems="center">
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
      <Button as={"a"} target="_blank" href={"/asd"} variant={"main"}>
        ALL OUR PORTFOLIO <AiOutlineLink />
      </Button>
    </Stack>
  );
};

export default Projects;
