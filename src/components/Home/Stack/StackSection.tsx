import { Container, SimpleGrid } from "@chakra-ui/react";
import StackCardComponent from "./components/StackCardComponent";
import { StackItemArray } from "../../../assets/Icons";
import GradientDivider from "../../GradientDivider";
import { AboutCopy } from "..";

const StackSection = () => {
  return (
    <Container
      variant={"overlay"}
      as={"section"}
      bgColor={"palette.sectionAbout"}
      gap={8}
      id="about"
    >
      <GradientDivider />
      <Container flex={1} variant={"section"} minH={"fit-content"} px={4}>
        <AboutCopy />
        <SimpleGrid minChildWidth={'78px'} px={[0, 2]} spacing={0} gap={10}>
          {StackItemArray.map((stackItem) => (
            <StackCardComponent
              key={stackItem.id}
              src={stackItem.src}
              alt={stackItem.alt}
            />
          ))}{" "}
        </SimpleGrid>
      </Container>
      <GradientDivider />
    </Container>
  );
};

export default StackSection;
