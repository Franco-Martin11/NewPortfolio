import {
  HStack,
  Box,
  Stack,
  Tooltip,
  Heading,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { SpinBox } from "../../..";
import { ProjectProps } from "../../../../types/types";
import { HandleMouseEvent } from "../../../../utils";

const ProjectCard = ({ descriptions, image, hyperLink }: ProjectProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HStack
      color={"white"}
      position={"relative"}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      flex={"1 0 350px"}
      flexDir={{ lg: "row-reverse" }}
      justifyContent={"center"}
      spacing={0}
      gap={8}
      onMouseOver={() => HandleMouseEvent.MouseOver(setIsHovering)}
      onMouseOut={() => HandleMouseEvent.MouseOut(setIsHovering)}
      _after={{
        content: `'0${descriptions.numberProject}'`,
        display: "inline-block",
        marginLeft: "5px",
        color: "#c7baff",
        fontWeight: "bold",
        position: "absolute",
        right: "0",
        top: "-30px",
        borderRadius: "full",
        width: "46px",
        textAlign: "center",
        margin: "0",
        // paddingY: 1,
        // paddingX: 2,
        border: "1px solid white",
      }}
    >
      <Box position={"relative"} boxSize={{ base: "250px", lg: "350px" }}>
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

      <Stack mt={"16"} spacing={0} gap={4} flex={"1 0 250PX"}>
        <Heading>{descriptions.title}</Heading>
        <Text>{descriptions.paragraph}</Text>
        <HStack alignItems={{ lg: "flex-end" }} gap={4}>
          {hyperLink?.map((link) => (
            <Tooltip key={link.id} label={link.title} placement="bottom">
              <Link as={"a"} href={link.route}>
                <link.icon size={"28px"} />
              </Link>
            </Tooltip>
          ))}
        </HStack>
      </Stack>
    </HStack>
  );
};

export default ProjectCard;
