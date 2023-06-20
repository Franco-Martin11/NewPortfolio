import { HStack, Text } from "@chakra-ui/react";
import { GradientText } from "../../..";

const AboutCopy = () => {
  return (
    <HStack alignItems={"flex-start"} flexWrap={"wrap"} gap={8} px={2}>
      <GradientText fontSize={{ base: "4xl", lg: "6xl" }} text="ABOUT ME" />
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        color={"palette.whiteText"}
        flex={"1 0 300px"}
      >
        As a Frontend Developer, I have expertise in using React with Typescript
        and Vue.js to create dynamic and engaging user interfaces. I have a
        solid understanding of Front-end web technologies, including HTML, CSS
        and JavaScript. My proficiency in these technologies allows me to build
        Responsive design and interactive web applications using best practices
        for code organization, optimization and performance. I am always looking
        for new opportunities to expand my skill set and learn new technologies.
        In my previous experience, I have demonstrated my ability to work in a
        team environment, collaborating with designers, developers and other
        industries to bring projects to fruition. I have experience with agile
        development methodologies and am able to adapt quickly to changing
        project requirements and priorities.
      </Text>{" "}
    </HStack>
  );
};

export default AboutCopy;
