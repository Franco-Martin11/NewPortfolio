import {
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  HStack,
  Avatar,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { ExperienceCard as ExperienceType } from "../../../../types/types";
const ExperienceCard = ({
  companies,
  date,
  listResponsibilities,
  listTecnologies,
}: ExperienceType) => {
  return (
    <Stack
      backdropBlur={"lg"}
      w={"full"}
      maxW={"inherit"}
      gap={4}
      spacing={0}
      color={"white"}
      justifyContent={'space-between'}
      px={2}
    >
      <Heading>{companies}</Heading>
      <Text>{date}</Text>
      <HStack spacing={0} gap={4} flexWrap={"wrap"}>
        {listResponsibilities && (
          <UnorderedList spacing={0} maxW={"full"}>
            {listResponsibilities.map((item) => (
              <ListItem key={item.id}>{item.item}</ListItem>
            ))}
          </UnorderedList>
        )}
        {listTecnologies && (
          <>
            <Text>Tecnologies</Text>
            <HStack flexWrap={"wrap"} spacing={0} gap={2}>
              {listTecnologies.map((item) => (
                <Tag
                  key={item.id}
                  size={"lg"}
                  colorScheme="purple"
                  borderRadius="full"
                  variant={"outline"}
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
              ))}
            </HStack>{" "}
          </>
        )}
      </HStack>
    </Stack>
  );
};

export default ExperienceCard;
