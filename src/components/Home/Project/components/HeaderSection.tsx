import { HStack, Button, Text } from "@chakra-ui/react";
import { GradientText } from "../../..";

const HeaderSection = () => {
  return (
    <HStack as={"header"} flexWrap={"wrap"} gap={4} spacing={0}>
      <GradientText
        text="  Impulsando la Experiencia del Usuario a través de Aplicaciones Web Modernas"
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
          Explorá mis Proyectos Frontend con Interfases Intuitivas y Atractivas
          hechas en React y Vue
        </Text>
        <HStack  flex={"0 0 300px"}>
          <Button variant={"ghost"} colorScheme="purple">
            React.js
          </Button>
          <Button variant={"ghost"} colorScheme="purple">
            Vue.js
          </Button>
          <Button variant={"solid"} colorScheme="purple">
            All
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default HeaderSection;
