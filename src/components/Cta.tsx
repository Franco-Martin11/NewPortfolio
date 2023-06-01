import { Heading } from "@chakra-ui/react";
import { Link as WouterLink } from "wouter";

type Props = { url: string; title: string };

const Cta = ({ url, title }: Props) => {
  return (
    <Heading
      as={WouterLink}
      href={url}
      display="flex"
      position="relative"
      alignItems="center"
      h="fit-content"
      px={4}
      py={2}
      bgColor="blackAlpha.400"
      borderRadius="md"
      borderBottomWidth={2}
      borderRightWidth={2}
      borderColor="whiteAlpha.600"
      fontSize="md"
      textTransform="uppercase"
    >
      {title}
    </Heading>
  );
};

export default Cta;
