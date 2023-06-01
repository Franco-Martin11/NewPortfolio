import { Stack, Text, chakra } from "@chakra-ui/react";

type Props = { textDescription: string; bgTooltip: string };

const Tooltip = ({ textDescription, bgTooltip }: Props) => {
  return (
    <Stack position={"relative"} width={"fit-content"}>
      <chakra.svg
        fill={bgTooltip}
        xmlns="http://www.w3.org/2000/svg"
        position={"absolute"}
        width="14px"
        height="44px"
        viewBox="0 0 24 24"
        top={"-15px"}
        left={"-9px"}
        rotate={"120deg"}
      >
        <chakra.path
          d="M0.188801 0.100505L23.6113 6.37653L6.46483 23.523L0.188801 0.100505Z"
          fill={bgTooltip}
        />
      </chakra.svg>

      <Stack borderRadius={"full"} bgColor={bgTooltip} boxShadow={"full"}>
        <Text
          width={"fit-content"}
          py={1}
          px={8}
          color={"whiteAlpha.800"}
          fontWeight={"semibold"}
          as={"span"}
        >
          {textDescription}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Tooltip;
