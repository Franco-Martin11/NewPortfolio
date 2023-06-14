import { Box, HStack, Text,chakra } from "@chakra-ui/react";
import { useState } from "react";
import { Link as WouterLink } from "wouter";
import { LinkRuoteArray } from "../../../constant/data";
import { handleDisableScroll, handleEnableScroll } from "../../../utils";

const NavigationLinks = () => {
  const [pulse, setPulse] = useState(false);

  const handleClick = async () => {
    setPulse((prevState) => !prevState);
    !pulse ? handleDisableScroll() : handleEnableScroll();
  };

  const linkItems = LinkRuoteArray.map((link) => (
    <Text
      as={WouterLink}
      key={link.id}
      aria-label={link.ariaLabel}
      href={link.route}
      fontSize={{ base: "xl", lg: "lg", xl: "xl" }}
    >
      {link.title}
    </Text>
  ));

  return (
    <>
      <HStack
        display={{ base: `${!pulse ? "none" : "flex"}`, md: "flex" }}
        position={{ base: "absolute", md: "initial" }}
        flexDirection={{ base: "column", md: "row" }}
        w="full"
        h={{ base: "100vh", md: "-webkit-fit-content" }}
        inset={0}
        gap={4}
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
        backdropFilter={{ base: "blur(10px) hue-rotate(385deg)", md: "none" }}
        zIndex="overlay"
        color="white"
      >
        {linkItems}
      </HStack>
      <Box
        boxSize={["48px", "68px"]}
        p={2}
        backgroundImage={'url("/CircleCTA.svg")'}
        title="HamburgerMenuButton"
        type="button"
        onClick={handleClick}
        as="button"
        zIndex="modal"
        display={{ md: "none" }}
        position={"relative"}
      >
        {!pulse ? (
          "🍔"
        ) : (
          <chakra.svg
            margin="auto"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.98937"
              y1="1.93934"
              x2="16.1315"
              y2="16.0815"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="1.86805"
              y1="15.9393"
              x2="16.0102"
              y2="1.7972"
              stroke="white"
              strokeWidth="3"
            />
          </chakra.svg>
        )}
      </Box>
    </>
  );
};

export default NavigationLinks;
