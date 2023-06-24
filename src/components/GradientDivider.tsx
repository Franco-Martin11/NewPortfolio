import { Center } from "@chakra-ui/react";

const GradientDivider = () => {
  return (
    <Center
      w={"full"}
      backgroundSize={{ base: "auto", md: "cover" }}
      backgroundImage={'url("/FrameHome.svg")'}
      minH={"5vh"}
    />
  );
};

export default GradientDivider;
