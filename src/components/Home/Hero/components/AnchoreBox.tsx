import { Stack } from "@chakra-ui/react";
import { MediaLinkArray } from "../../../../constant/data";
import AnchoreButton from "./AnchoreButton";
import { uuidGenerator } from "../../../../utils";

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
        <AnchoreButton
          route={media.route}
          ariaLabel={media.ariaLabel}
          label={media.label}
          icon={media.icon}
          key={uuidGenerator()}
        />
      ))}{" "}
    </Stack>
  );
};
export default AnchoreBox;
