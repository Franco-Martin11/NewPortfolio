import { Container, SimpleGrid } from "@chakra-ui/react";

import { HeaderSection, ProjectCard } from "./components";
import { ProjectExampleData } from "../../../constant/data";
import { ProjectProps } from "../../../types/types";

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
    <Container variant={"section"} as={"section"} pr={{ md: 8 }}>
      <HeaderSection />
      <SimpleGrid
        minChildWidth="300px"
        gap={{ base: 14, md: 8 }}
        w={"full"}
        maxW={{ base: "1250px", xl: "1500px" }}
        margin={"0 auto"}
        // p={{ base: 2, md: 4 }}
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
    </Container>
  );
};

export default Projects;
