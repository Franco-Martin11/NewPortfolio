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
      zIndex={'modal'}
      px={4}
      py={2}
      backdropFilter={'blur(2px)'}
    >
      <Box>
        <Logo />
      </Box>
      <NavigationLinks />
    </HStack>
  );
};

export default Navbar;
