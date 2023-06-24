import { HStack, Text } from "@chakra-ui/react";
import { GradientText } from "../../..";

const AboutCopy = () => {
  return (
    <HStack alignItems={"flex-start"} flexWrap={"wrap"} gap={8} px={2}>
      <GradientText fontSize={{ base: "4xl", xl: "6xl" }} text="ABOUT ME" />
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        color={"palette.whiteText"}
        flex={"1 0 300px"}
      >
        I'm an experienced Frontend Developer skilled in React, Typescript, and
        Vue.js for creating dynamic user interfaces. I have a strong grasp of
        HTML, CSS, and JavaScript, allowing me
        to build responsive web applications while optimizing performance. I
        excel in collaborative team environments and adapt quickly to changing
        project requirements.
      </Text>{" "}
    </HStack>
  );
};

export default AboutCopy;
