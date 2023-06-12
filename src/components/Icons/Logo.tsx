import { Box, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as WouterLink } from "wouter";
const SvgComponent = () => (
  <LinkBox
    p={"0.5"}
    borderRadius={"full"}
    bgGradient="linear-gradient(90deg, #593FC9 2.08%, #6F5BC6 48.44%, #917EDB 72.4%, #B6A4F3 100%)"
    cursor={"pointer"}
  >
    <Box borderRadius={"inherit"} px={2} py={1} bg={"palette.mainDarkBlue"}>
      <LinkOverlay as={WouterLink} href="/">
        <Box
          as={Heading}
          pointerEvents="none"
          sx={{
            background:
              "linear-gradient(94.75deg, #94E4E2 3.81%, #BCEEED 82.98%, #FFFFFF 116.45%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          FM
        </Box>
      </LinkOverlay>
    </Box>
  </LinkBox>
);
export default SvgComponent;
