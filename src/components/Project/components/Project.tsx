import { HStack, Heading, Image, Stack } from "@chakra-ui/react";
import { Project as ProjectType } from "../../../types/types";
import Cta from "../../Cta";

const Project = ({
  title,
  imageAlternate,
  imageSource,
  routes,
}: ProjectType) => {
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
        {routes.map((route, index) => (
          <Cta
            title={route.title}
            url={route.url}
            key={route.id}
            variant={index % 2 === 0 ? "main" : "secondary"}
          />
        ))}
      </HStack>
    </Stack>
  );
};

export default Project;
