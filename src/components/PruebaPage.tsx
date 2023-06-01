import { Heading, Stack, Text } from "@chakra-ui/react";

type Props = { params: { id: string } };

const PruebaPage = ({ params }: Props) => {
  return (
    <Stack bg={"palette.secondary"} color={"palette.heading"}>
      <Text>PruebaPage:{params.id}</Text>
      <Heading>Holis</Heading>
    </Stack>
  );
};

export default PruebaPage;
