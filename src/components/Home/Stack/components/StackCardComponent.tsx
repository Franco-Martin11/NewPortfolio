import { Stack, Tag } from "@chakra-ui/react";
import { StackItem } from "../../../../types/types";

const StackCardComponent = (props: StackItem) => {
  return (
    <Stack align={'center'} spacing={0} gap={4}>
      <props.src size={"48px"} color="white" />
      <Tag
      flex={1}
        colorScheme="purple"
        fontSize={"md"}
        textTransform={"capitalize"}
        aria-label={props.alt}
        textAlign={"center"}
        p={2}
      >
        {props.alt}
      </Tag>
    </Stack>
  );
};

export default StackCardComponent;
