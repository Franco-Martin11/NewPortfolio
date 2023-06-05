import { Button, Link, LinkBox } from "@chakra-ui/react";
import { useState } from "react";
import { Link as WouterLink } from "wouter";
import { handleDisableScroll, handleEnableScroll } from "../../../utils";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
const NavigationLinks = () => {
  const [pulse, setPulse] = useState(false);

  const handleClick = async () => {
    setPulse(!pulse);
    !pulse ? handleDisableScroll() : handleEnableScroll();
  };

  return (
    <>
      <LinkBox
        display={{ base: `${!pulse ? "none" : "flex"}`, md: "flex" }}
        position={{ base: "absolute", md: "initial" }}
        flexDirection={{ base: "column", md: "row" }}
        w={"full"}
        h={{ base: "100vh", md: "-webkit-fit-content" }}
        inset={"0"}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"0 auto"}
        backdropFilter="blur(10px) hue-rotate(90deg)"
        zIndex={"overlay"}
        color={"white"}
      >
        <Link as={WouterLink} href="/project">
          Chakra project
        </Link>
        <Link as={WouterLink} href="/project/22">
          Chakra project 22
        </Link>
        <Link as={WouterLink} href="/prueba">
          Chakra prueba
        </Link>
        <Link as={WouterLink} href="/">
          Chakra HOME
        </Link>{" "}
      </LinkBox>
      <Button
        margin={"0 !important"}
        p={2}
        onClick={handleClick}
        zIndex={"modal"}
        display={{ md: "none" }}
      >
        {!pulse ? (
          <RxHamburgerMenu size={"1.5em"} />
        ) : (
          <AiOutlineClose size={"1.5em"} />
        )}
      </Button>
    </>
  );
};

export default NavigationLinks;
