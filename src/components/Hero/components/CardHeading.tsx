import { Box, HStack, Image, Stack } from "@chakra-ui/react";
import { FiPower } from "react-icons/fi";
import GradientText from "../../GradientText";

const CardHeading = () => {
  return (
    <Stack
      boxShadow="20px -20px 0px 0px #191929"
      w={{ base: "xs", md: "md" }}
      borderRadius={"3xl"}
      gap={8}
      px={4}
      pt={8}
      pb={"12"}
      bgColor={"#28293F"}
      alignItems={"center"}
      opacity={{ base: 1, md: 0.25 }}
    >
      <Image src="/PointsDetail.svg" alignSelf={"flex-start"} w={"48px"} />
      <HStack>
        <GradientText text="LETS START THE PROJECT" />

        <Box
          p={"0.5"}
          borderRadius={"full"}
          bgGradient="linear-gradient(90deg, #593FC9 2.08%, #6F5BC6 48.44%, #917EDB 72.4%, #B6A4F3 100%)"
        >
          <Box borderRadius={"inherit"} p={"3"} bg={"palette.mainDarkBlue"}>
            <FiPower color={"white"} size="22px" />
          </Box>
        </Box>
      </HStack>{" "}
      <Image
        boxSize={{ base: "3xs", md: "xs" }}
        src="/codingImage.jpg"
        boxShadow="0px 0px 0px 20px #121220"
        borderRadius={"md"}
        aspectRatio={"1/1"}
        objectFit={"cover"}
      />
    </Stack>
  );
};

export default CardHeading;
