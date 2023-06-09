import {
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  HStack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { ExperienceCard as ExperienceType } from "../../../../types/types";
const ExperienceCard = ({
  companies,
  date,
  listResponsibilities,
  listTecnologies,
  desciption,
}: ExperienceType) => {
  return (
    <Stack
      backdropBlur={"lg"}
      w={"full"}
      maxW={"inherit"}
      gap={4}
      spacing={0}
      color={"white"}
      justifyContent={"flex-start"}
      px={2}
    >
      <Heading>{companies}</Heading>
      <Text>{date}</Text>
      <Stack spacing={0} gap={2}>
        <Text textColor={"gray.300"}>Description</Text>
        <Text>{desciption}</Text>
      </Stack>
      <Text textColor={"gray.300"}>Responsibilities:</Text>
      <HStack spacing={0} gap={4} flexWrap={"wrap"}>
        {listResponsibilities && (
          <>
            <UnorderedList flex={"1 0 250px"} spacing={0} maxW={"full"}>
              {listResponsibilities.map((item) => (
                <ListItem key={item.id}>{item.item}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        {listTecnologies && (
          <Stack spacing={0} gap={4}>
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
                  {/* <Avatar
                    src="https://bit.ly/sage-adebayo"
                    size="2xs"
                    name="Segun Adebayo"
                    ml={-1}
                    mr={2}
                  /> */}
                  <TagLabel color={"#e9d8fd"}>{item.item}</TagLabel>
                </Tag>
              ))}
            </HStack>{" "}
          </Stack>
        )}
      </HStack>
    </Stack>
  );
};

export default ExperienceCard;
