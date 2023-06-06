import { HStack, Heading, Text, chakra } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack spacing={0} gap={4} as={"header"} alignItems={"flex-start"}>
      <Heading>
        {" "}
        EXPLORE MY RECENT <chakra.span color={"palette.main"}>WORK</chakra.span>
      </Heading>
      <Text maxW={"md"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, nam
        inventore? Totam consectetur commodi.
      </Text>
    </HStack>
  );
};

export default Header;
