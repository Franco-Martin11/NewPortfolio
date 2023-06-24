import { Container, SimpleGrid } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import { GradientText } from "../../..";
import { companiesExperience } from "../../../../constant/data";

const ExperienceSection = () => {
  return (
    <Container id="experience" variant={"overlay"} as={"section"}>
      <GradientText fontSize={{ base: "4xl", xl: "6xl" }} text="EXPERIENCE" />
      <SimpleGrid
        justifyItems={"center"}
        px={{ base: 2, md: 0 }}
        gap={8}
        w={"full"}
        minChildWidth={"300px"}
        spacing={0}
      >
        {companiesExperience.map((dataExpress) => (
          <ExperienceCard
            companies={dataExpress.companies}
            date={dataExpress.date}
            listResponsibilities={dataExpress.listResponsibilities}
            key={dataExpress.id}
            listTecnologies={dataExpress.listTecnologies}
          />
        ))}
      </SimpleGrid>{" "}
    </Container>
  );
};

export default ExperienceSection;
