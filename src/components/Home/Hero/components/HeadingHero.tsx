import { Box, Stack } from "@chakra-ui/react";
import { GradientText } from "../../..";

const HeadingHero = () => {
  return (
    <Stack
      position={{ base: "inherit", md: "absolute" }}
      maxW={"1200px"}
      bottom={{ base: 0, md: "50px", lg: 10 }}
      px={{ md: 8 }}
      alignItems={"center"}
    >
      <GradientText
        text="DIGITALIZING & CREATING"
        fontSize={{ base: "2.5rem", md: "4rem", xl: "5rem" }}
        display="flex"
        flexDirection="column"
        textAlign="center"
        alignItems={"center"}
      />
      <Box
        p={"0.5"}
        borderRadius={"full"}
        bgGradient="linear-gradient(90deg, #593FC9 2.08%, #6F5BC6 48.44%, #917EDB 72.4%, #B6A4F3 100%)"
        cursor={"pointer"}
        w={"fit-content"}
      >
        <Box borderRadius={"full"} px={4} py={2} bg={"palette.mainDarkBlue"}>
          <GradientText
            text="FRONTEND"
            fontSize={{ base: "2.5rem", md: "4rem", xl: "5rem" }}
            sx={{
              background:
                "linear-gradient(94.75deg, #94E4E2 3.81%, #BCEEED 82.98%, #FFFFFF 116.45%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          />
        </Box>
      </Box>
      <GradientText
        text="SOLUTIONS"
        fontSize={{ base: "2.5rem", md: "4rem", xl: "5rem" }}
      />
      <GradientText
        textAlign="center"
        text="Franco Martin / Frontend Developer"
        as="h1"
      />
    </Stack>
  );
};

export default HeadingHero;
