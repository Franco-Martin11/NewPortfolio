import { HStack, Heading, Image, Stack } from "@chakra-ui/react";
import Cta from "../Cta";
import { Project } from "../../types/types";

const ProjectCard = ({ title, imageAlternate, imageSource, routes }: Project) => {
  return (
    <Stack gap={4} spacing={0} w="full" maxW="350px">
      <Image
        w="full"
        src={imageSource}
        alt={imageAlternate}
        aspectRatio="1/1"
        borderRadius="lg"
      />
      <Heading fontSize="28px" fontWeight="semibold" textTransform="uppercase">
        {title}
      </Heading>
      <HStack gap={2} spacing={0}>
        {routes.map((route) => (
          <Cta title={route.title} url={route.url} key={route.id} />
        ))}
      </HStack>
    </Stack>
  );
};

export default ProjectCard;
