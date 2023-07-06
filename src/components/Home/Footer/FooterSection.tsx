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
import { uuidGenerator } from "../../../utils";

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
      <GradientText
        fontSize={{ base: "4xl", xl: "6xl" }}
        flex="1 0 200px"
        text="CONTACT"
      />

      <Stack
        color={"white"}
        textTransform={"capitalize"}
        flex="1 0 200px"
        spacing={0}
        gap={4}
      >
        <Heading size={"md"}>I encourage you to do it</Heading>
        <Text size={"md"}>
          if you want to know more about me and my experience in the programming
          world, do not hesitate to contact me.
        </Text>
      </Stack>

      <HStack
        justifyContent={"center"}
        color={"white"}
        flex="1 0 200px"
        flexWrap={"wrap"}
        spacing={0}
        gap={10}
      >
        {MediaLinkArray.slice(0, 3).map((media) => (
          <Tooltip
            key={uuidGenerator()}
            label={media.label}
            placement="bottom"
            defaultIsOpen={true}
            bg={"palette.secondaryPurple"}
          >
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
