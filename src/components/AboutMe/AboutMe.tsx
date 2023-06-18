import { Center } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Center
      w={"full"}
      backgroundSize={{ base: "auto", md: "cover" }}
      backgroundImage={'url("/FrameHome.svg")'}
      minH={"5vh"}
    ></Center>
  );
};

export default AboutMe;
