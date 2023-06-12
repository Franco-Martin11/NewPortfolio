import { Heading } from "@chakra-ui/react";

interface GradientText {
  [key: string]: string | object;
  text: string;
}

const GradientText = ({ text, ...props }: GradientText) => {
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
      {...props}
    >
      {text}
      <>{props.children}</>
    </Heading>
  );
};

export default GradientText;
