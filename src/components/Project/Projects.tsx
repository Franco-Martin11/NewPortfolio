import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";
import { ProjectProps } from "../../types/types";
import { ProjectExampleData } from "../../constant/data";

const Projects = () => {
  // const { data, loading, error } = useFetch("http://localhost:3000/project");
  // if (loading)
  //   return (
  //     <Center bg="transparent" h="150px" color="white">
  //       <Spinner colorScheme="purple" size={"xl"} />
  //     </Center>
  //   );

  // if (error)
  //   <Center bg="transparent" h="150px" color="white">
  //     <Heading>errorType:{error}</Heading>
  //   </Center>;
  // if (data)
  return (
    <SimpleGrid
      minChildWidth="300px"
      gap={{ base: 14, md: 8 }}
      w={"full"}
      maxW={{ base: "1250px", xl: "1500px" }}
      margin={"0 auto"}
      p={{ base: 2, md: 4 }}
      my={8}
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
    </SimpleGrid>
  );
};

export default Projects;
