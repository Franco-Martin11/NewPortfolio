import { Center, Container } from "@chakra-ui/react";
import AboutCopy from "./components/AboutCopy";
import { ExperienceSection } from "..";

const AboutMe = () => {
  return (
    <Container
      variant={"overlay"}
      as={"section"}
      bgColor={"palette.sectionAbout"}
      gap={0}
    >
      <Center
        w={"full"}
        backgroundSize={{ base: "auto", md: "cover" }}
        backgroundImage={'url("/FrameHome.svg")'}
        minH={"5vh"}
      />
      <Container
        variant={"section"}
        minH={"fit-content"}
        px={2}
        py={8}
        gap={16}
      >
        <AboutCopy />
        <ExperienceSection />
      </Container>
    </Container>
  );
};

export default AboutMe;
