import {
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { ExperienceCard as ExperienceType } from "../../../../types/types";
const ExperienceCard = ({
  companies,
  date,
  listResponsibilities,
}: ExperienceType) => {
  return (
    <Stack backdropBlur={"lg"} gap={4} spacing={0} color={"white"}>
      <Heading>{companies}</Heading>
      <Text>{date}</Text>
      {listResponsibilities && (
        <UnorderedList>
          {listResponsibilities.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </UnorderedList>
      )}
    </Stack>
  );
};

export default ExperienceCard;
