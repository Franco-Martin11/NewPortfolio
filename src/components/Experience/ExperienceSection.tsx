import { Container, SimpleGrid } from "@chakra-ui/react";
import { ExperienceCard, GradientText } from "..";
import { companiesExperience } from "../../constant/data";

const ExperienceSection = () => {
  return (
    <Container backgroundColor={"#61619b"} variant={"overlay"} as={"section"}>
      <GradientText fontSize={"6xl"} text="EXPERIENCE" />
      <SimpleGrid px={8} gap={8} minChildWidth={"350px"}>
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
