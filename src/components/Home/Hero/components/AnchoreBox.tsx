import { Box, Stack, Tooltip } from "@chakra-ui/react";
import { MediaLinkArray } from "../../../../constant/data";

const AnchoreBox = () => {
  return (
    <Stack
      flexDir={{ base: "row", md: "column" }}
      gap={4}
      justifyContent={"center"}
      position={{ base: "inherit", md: "absolute" }}
      right={0}
      top={0}
      bottom={0}
      spacing={0}
      pr={{ base: 0, md: 8 }}
    >
      {MediaLinkArray.map((media) => (
        <Tooltip

          key={media.id}
          label={media.label}
          placement="left"
        >
          <Box
            as="a"
            _hover={{
              filter:
                "drop-shadow(0 0 1rem var(--chakra-colors-palette-secondaryPurple))",
              transition: "filter 0.25s ease",
            }}
            rel="noopener"
            target="_blank"
            href={media.route}
            aria-label={media.ariaLabel}
          >
            <media.icon size="32px" />
          </Box>
        </Tooltip>
      ))}{" "}
    </Stack>
  );
};
export default AnchoreBox;
