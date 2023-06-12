import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = { text: string };

const GradientText = ({ text }: Props) => {
  return (
    <Heading
      sx={{
        background:
          "linear-gradient(94.75deg, #94E4E2 3.81%, #BCEEED 82.98%, #FFFFFF 116.45%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
      }}
    >
      {text}
    </Heading>
  );
};

export default GradientText;
