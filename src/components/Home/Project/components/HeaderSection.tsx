import { HStack, Text } from "@chakra-ui/react";
import { GradientText } from "../../..";

const HeaderSection = () => {
  return (
    <HStack as={"header"} flexWrap={"wrap"} gap={4} spacing={0}>
      <GradientText
        fontSize={{ base: "2xl", xl: "4xl" }}
        text=" Driving User Experience through Modern Web Applications"
        flex={"1 0 300px"}
      />
      <HStack
        color={"white"}
        flex={"1 0 350px"}
        gap={4}
        flexWrap={"wrap"}
        spacing={0}
        justifyContent={"space-between"}
      >
        <Text flex={"0 0 300px"} fontSize={"lg"} color={"palette.grayText"}>
          {" "}
          Explore my Frontend Projects with Intuitive and Attractive Interfaces
          made in React and Vue
        </Text>
        {/* <HStack flex={"0 0 300px"}>
          <Button variant={"ghost"} colorScheme="purple">
            React.js
          </Button>
          <Button variant={"ghost"} colorScheme="purple">
            Vue.js
          </Button>
          <Button variant={"solid"} colorScheme="purple">
            All
          </Button>
        </HStack> */}
      </HStack>
    </HStack>
  );
};

export default HeaderSection;
