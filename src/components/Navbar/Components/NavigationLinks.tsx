import { Box, HStack, Link } from "@chakra-ui/react";
import { useState } from "react";
import { LinkRuoteArray } from "../../../constant/data";
import { CloseIcon } from "../..";

const NavigationLinks = () => {
  const [pulse, setPulse] = useState(false);

  const handleClick = () => {
    setPulse((prevState) => !prevState);
  };

  const handleFocus = () => {
    setTimeout(() => {
      setPulse((prevState) => !prevState);
    }, 300);
  };

  const linkItems = LinkRuoteArray.map((link) => (
    <li key={link.id}>
      <Link
        as="a"
        _active={{ color: "red.500" }}
        aria-label={link.ariaLabel}
        href={link.route}
        fontSize={{ base: "xl", lg: "lg", xl: "xl" }}
        onClick={handleFocus}
      >
        {link.title}
      </Link>
    </li>
  ));

  return (
    <>
      <HStack
        as="ul"
        id="navbar"
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
        boxSize="48px"
        p={2}
        backgroundImage='url("/CircleCTA.svg")'
        title="HamburgerMenuButton"
        type="button"
        onClick={handleClick}
        as="button"
        zIndex="modal"
        display={{ md: "none" }}
        position="relative"
      >
        {!pulse ? "🍔" : <CloseIcon />}
      </Box>
    </>
  );
};

export default NavigationLinks;
