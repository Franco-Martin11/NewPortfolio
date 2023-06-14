import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function Example({ logo, props }: { logo: string; props?: any }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 600s linear`;

  return (
    <Image
      borderRadius={"lg"}
      boxSize={"full"}
      animation={animation}
      src={logo}
      {...props}
    />
  );
}

const ProjectCard = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <HStack
      color={"white"}
      position={"relative"}
      flexWrap={"wrap-reverse"}
      justifyContent={"center"}
      gap={'24'}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      py={20}
      px={8}
    >
      <Stack flex={"1 0 200PX"}>
        <Heading>Server solutions and APIs</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quos delectus dignissimos ipsa beatae laborum nesciunt minima
          doloremque, nulla quasi optio maiores.
        </Text>
      </Stack>
      <Box
        right={0}
        top={0}
        m={2}
        borderRadius={"xl"}
        bgColor={"whiteAlpha.200"}
        boxSize="250px"
      >
        {Example({ logo: "/image5.jpg" })}
      </Box>
    </HStack>
  );
};

export default ProjectCard;
