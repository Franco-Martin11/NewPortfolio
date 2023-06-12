import { Box, Stack, Tooltip } from "@chakra-ui/react";
import { MediaLinkArray } from "../../../constant/data";

const AnchoreBox = () => {
  return (
    <Stack
      position={"absolute"}
      right={0}
      top={0}
      bottom={0}
      spacing={0}
      gap={4}
      justifyContent={"center"}
      pr={8}
    >
      {MediaLinkArray.map((media) => (
        <Tooltip key={media.id} label={media.label} placement="left">
          <Box
            as="a"
            rel="noopener"
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
