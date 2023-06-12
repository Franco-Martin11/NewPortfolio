import { Box, HStack } from "@chakra-ui/react";
import { Logo } from "../Icons";
import NavigationLinks from "./Components/NavigationLinks";

const Navbar = () => {
  return (
    <HStack
      position={"fixed"}
      top={"0"}
      spacing={0}
      justify={"space-between"}
      gap={4}
      w={"full"}
      zIndex={"modal"}
      py={2}
      px={4}
    >
      <Box>
        <Logo />
      </Box>
      <NavigationLinks />
    </HStack>
  );
};

export default Navbar;
