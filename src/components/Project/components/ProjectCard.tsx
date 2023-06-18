import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import SpinBox from "./SpinBox";
import { HandleMouseEvent } from "../../../utils";
import { ProjectProps } from "../../../types/types";

const ProjectCard = ({ descriptions, image, hyperLink }: ProjectProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HStack
      color={"white"}
      position={"relative"}
      flexWrap={{ base: "wrap" }}
      flexDir={{ lg: "row-reverse" }}
      justifyContent={"center"}
      gap={6}
      onMouseOver={() => HandleMouseEvent.MouseOver(setIsHovering)}
      onMouseOut={() => HandleMouseEvent.MouseOut(setIsHovering)}
      _after={{
        content: `'0${descriptions.numberProject}'`,
        display: "inline-block",
        marginLeft: "5px",
        color: "#c7baff",
        fontWeight: "bold",
        position: "absolute",
        left: "0",
        top: "-40px",
        borderRadius: "full",
        paddingY: 1,
        paddingX: 2,
        border: "1px solid white",
      }}
    >
      <HStack
        spacing={0}
        gap={4}
        justifyContent={"center"}
        flex={1}
        flexDir={{ lg: "column" }}
      >
        <Box position={"relative"} boxSize="250px">
          <SpinBox
            filter={
              isHovering
                ? "drop-shadow(0 0 1rem var(--chakra-colors-palette-secondaryPurple))"
                : ""
            }
            transition={isHovering ? "filter 0.5s ease" : ""}
            bgColor={"whiteAlpha.200"}
            boxSize={"inherit"}
          />
          <Image
            position={"absolute"}
            inset={0}
            src={image.srcUrl}
            alt={image.alt}
            boxSize={"inherit"}
            borderRadius={"xl"}
          />
        </Box>
        <Stack
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ lg: "flex-end" }}
          gap={4}
        >
          {hyperLink?.map((link) => (
            <Tooltip key={link.id} label={link.title} placement="bottom">
              <Link as={"a"} href={link.route}>
                <link.icon size={"28px"} />
              </Link>
            </Tooltip>
          ))}
        </Stack>
      </HStack>

      <Stack mt={"16"} flex={"1 0 250PX"}>
        <Heading>{descriptions.title}</Heading>
        <Text>{descriptions.paragraph}</Text>
      </Stack>
    </HStack>
  );
};

export default ProjectCard;
