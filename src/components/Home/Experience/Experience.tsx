import { Container } from "@chakra-ui/react";
import { ExperienceSection } from "..";

const Experience = () => {
  return (
    <Container
      variant={"overlay"}
      as={"section"}
      bgColor={"palette.sectionAbout"}
      gap={0}
      id="about"
    >
 {/* <GradientDivider /> */}
      <Container
        variant={"section"}
        minH={"fit-content"}
        px={2}
        py={8}
        gap={16}
      >
        <ExperienceSection />
      </Container>
       
    </Container>
  );
};

export default Experience;
