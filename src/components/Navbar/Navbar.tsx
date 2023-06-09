import { HStack } from "@chakra-ui/react";
import NavigationLinks from "./Components/NavigationLinks";
import Logo from "./Components/Logo";

const Navbar = () => {
  return (
    <HStack
      position={"fixed"}
      top={"0"}
      left={"0"}
      spacing={0}
      justify={"space-between"}
      gap={4}
      w={"full"}
      zIndex={"modal"}
      py={2}
      px={4}
      backdropFilter={{ md: "blur(10px)" }}
    >
      <Logo />
      <NavigationLinks />
    </HStack>
  );
};

export default Navbar;
