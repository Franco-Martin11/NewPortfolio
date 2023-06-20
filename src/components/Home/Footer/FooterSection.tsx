import {
  Box,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { GradientText } from "../..";
import { MediaLinkArray } from "../../../constant/data";

const FooterSection = () => {
  return (
    <Container
      as={"footer"}
      variant={"section"}
      flexDir={"row"}
      flexWrap={"wrap"}
      gap={[8, 8, 6, 4]}
      alignItems={"center"}
      justifyContent={"space-between"}
      id="contact"
      px="4"
      minHeight={"25px"}
      mb={"12 !important"}
    >
      <GradientText fontSize={{ base: "4xl", xl: "6xl" }} flex="1 0 200px" text="CONTACT" />

      <Stack color={"white"} flex="1 0 200px" spacing={0} gap={4}>
        <Heading size={"md"}>Titulo</Heading>
        <Text size={"md"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          atque dolorum nihil.
        </Text>
      </Stack>

      <HStack
        justifyContent={"center"}
        color={"white"}
        flex="1 0 200px"
        flexWrap={"wrap"}
        spacing={0}
        gap={4}
      >
        {MediaLinkArray.map((media) => (
          <Tooltip key={media.id} label={media.label} placement="left">
            <Box
              as="a"
              rel="noopener"
              target="_blank"
              href={media.route}
              aria-label={media.ariaLabel}
            >
              <media.icon size="32px" />
            </Box>
          </Tooltip>
        ))}{" "}
      </HStack>
    </Container>
  );
};

export default FooterSection;
