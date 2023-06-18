import { Button, Container, HStack, Stack, Text } from "@chakra-ui/react";
import Hero from "./Hero/Hero";
import { GradientText, Projects } from ".";

const Prueba2 = () => {
  return (
    <Stack gap={12}>
      <Hero />
      <Container
      variant={'section'}
        // backgroundSize={"cover"}
        // backgroundImage={'url("/FrameHome.svg")'}
        // backgroundPosition={"left"}
        // backgroundBlendMode="difference"
        // backgroundBlendMode="difference"
        // background="linear-gradient(139deg,#121220 6.53%, #1E1E1E 36.53%, #25283f 63.99%, #0E859C 165.95%)"
      >
        <HStack as={"header"} flexWrap={"wrap"} gap={4} spacing={0}>
          <GradientText
            text="  Impulsando la Experiencia del Usuario a través de Aplicaciones Web Modernas"
            flex={"1 0 350px"}
          />
          <HStack
            color={"white"}
            flex={"1 0 350px"}
            gap={4}
            flexWrap={"wrap"}
            spacing={0}
          >
            <Text flex={"0 0 350px"}>
              {" "}
              Explorá mis Proyectos Frontend con Interfases Intuitivas y
              Atractivas hechas en React y Vue
            </Text>
            <HStack>
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
        <Projects />
      </Container>
    </Stack>
  );
};

export default Prueba2;
