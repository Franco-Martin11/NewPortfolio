import { Container, SimpleGrid } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import { GradientText } from "../../..";
import { companiesExperience } from "../../../../constant/data";


const ExperienceSection = () => {
  return (
    <Container variant={"overlay"} as={"section"}>
      <GradientText fontSize={"6xl"} text="EXPERIENCE" />
      <SimpleGrid px={8} gap={8} minChildWidth={"350px"} spacing={0}>
        {companiesExperience.map((dataExpress) => (
          <ExperienceCard
            companies={dataExpress.companies}
            date={dataExpress.date}
            listResponsibilities={dataExpress.listResponsibilities}
            key={dataExpress.id}
          />
        ))}
      </SimpleGrid>{" "}
    </Container>
  );
};

export default ExperienceSection;
