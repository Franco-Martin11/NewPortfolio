import { Box, Tooltip } from "@chakra-ui/react";
import { StackItem } from "../../../../types/types";

const StackCardComponent = (props: StackItem) => {
  return (
    <Tooltip
      label={props.alt}
      aria-label={props.alt}
      placement="bottom"
      textTransform={"capitalize"}
      colorScheme="purple"
      defaultIsOpen={true}
      fontSize={"md"}
    >
      <Box
        p={2}
        boxSize={{ base: "48px", md: "58px", xl: "68px", "2xl": "88px" }}
      >
        <props.src size={"inherit"} color="white" />
      </Box>
    </Tooltip>
  );
};

export default StackCardComponent;
