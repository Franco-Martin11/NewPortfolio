import { HStack, Heading, Image, Stack } from "@chakra-ui/react";
import { Project as ProjectType } from "../../../types/types";
import Cta from "../../Cta";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { Link as WouterLink } from "wouter";

interface ComponentMap {
  [key: string]: React.ReactNode;
}

const Project = ({
  title,
  imageAlternate,
  imageSource,
  routes,
}: ProjectType) => {
  const componentMap: ComponentMap = {
    deploy: <AiOutlineLink />,
    repository: <AiOutlineGithub />,
  };

  return (
    <Stack
      gap={8}
      spacing={0}
      w="full"
      maxW={"350px"}
      _hover={{ cursor: "pointer" }}
      as={WouterLink}
      href={`/project/${imageAlternate}`}
    >
      <Image
        w="full"
        src={imageSource}
        alt={imageAlternate}
        aspectRatio="1/1"
        borderRadius="md"
      />
      <Heading fontSize="38px" fontWeight="semibold" textTransform="uppercase">
        {title}
      </Heading>
      <HStack gap={2} spacing={0}>
        {routes.map((route) => (
          <Cta
            title={route.title}
            url={route.url}
            key={route.id}
            variant={"secondary"}
            icon={componentMap[route.title]}
          />
        ))}
      </HStack>
    </Stack>
  );
};

export default Project;
