import {
  HStack,
  Box,
  Stack,
  Tooltip,
  Heading,
  Image,
  Text,
  Link,
  Avatar,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { SpinBox } from "../../..";
import { ProjectProps } from "../../../../types/types";
import { HandleMouseEvent } from "../../../../utils";
import { listTecnologies } from "../../../../constant/data";

const ProjectCard = ({ descriptions, image, hyperLink }: ProjectProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HStack
      color={"white"}
      position={"relative"}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      flex={"1 0 300px"}
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
      <Box
        position={"relative"}
        boxSize={{ base: "250px", lg: "400px", xl: "400px" }}
      >
        <SpinBox
          overflowX={"hidden"}
          borderWidth='1px'
          borderColor='whiteAlpha.300'
          filter={
            isHovering
              ? "drop-shadow(0 0 3rem var(--chakra-colors-palette-secondaryPurple))"
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
          objectFit={'cover'}
          objectPosition={'top'}
        />
      </Box>

      <Stack mt={"16"} spacing={0} gap={8}>
        <HStack spacing={0} gap={12} wrap={"wrap"}>
          <Heading>{descriptions.title}</Heading>
          <HStack alignItems={{ lg: "flex-end" }} gap={2}>
            {hyperLink?.map((link) => (
              <Tooltip key={link.id} label={link.title} placement="bottom">
                <Link as={"a"} href={link.route}>
                  <link.icon size={"28px"} />
                </Link>
              </Tooltip>
            ))}
          </HStack>
        </HStack>
        <Text maxW={"full"}>{descriptions.paragraph}</Text>

        <Stack spacing={0} gap={4}>
          <Text>Tecnologies:</Text>
          <HStack maxW={"350px"} wrap={"wrap"} spacing={0} gap={2}>
            {listTecnologies.map((item) => (
              <Tag
                _hover={{
                  filter:
                    "drop-shadow(0 0 1rem var(--chakra-colors-palette-secondaryPurple))",
                  transition: "filter 0.25s ease",
                }}
                key={item.id}
                size={"lg"}
                colorScheme="purple"
                borderRadius="full"
                variant={"subtle"}
              >
                <Avatar
                  src="https://bit.ly/sage-adebayo"
                  size="2xs"
                  name="Segun Adebayo"
                  ml={-1}
                  mr={2}
                />
                <TagLabel>{item.item}</TagLabel>
              </Tag>
            ))}{" "}
          </HStack>
        </Stack>
      </Stack>
    </HStack>
  );
};

export default ProjectCard;
