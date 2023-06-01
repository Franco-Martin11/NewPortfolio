import { Button, Link, LinkBox } from "@chakra-ui/react";
import { useState } from "react";
import { Link as WouterLink } from "wouter";
const NavigationLinks = () => {
  const [pulse, setPulse] = useState(false);

  const handleClick = () => setPulse(!pulse);
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
        w="52px"
        p={2}
        onClick={handleClick}
        zIndex={"modal"}
        display={{ md: "none" }}
      >
        {!pulse ? "🍔" : "X"}
      </Button>
    </>
  );
};

export default NavigationLinks;
