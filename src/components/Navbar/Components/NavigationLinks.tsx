import { Button, HStack, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Link as WouterLink } from "wouter";
import { LinkRuoteArray } from "../../../constant/data";
const NavigationLinks = () => {
  const [pulse, setPulse] = useState(false);

  const handleClick = () => setPulse(!pulse);
  return (
    <>
      <HStack
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
        backdropFilter={{
          base: "blur(10px) hue-rotate(90deg)",
          md: "none",
        }}
        zIndex={"overlay"}
        color={"white"}
      >
        {LinkRuoteArray.map((link) => (
          <Link
            as={WouterLink}
            key={link.id}
            aria-label={link.ariaLabel}
            href={link.route}
          >
            {link.title}
          </Link>
        ))}
      </HStack>
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
