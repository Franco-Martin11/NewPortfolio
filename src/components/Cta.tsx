import { Button } from "@chakra-ui/react";
import { Link as WouterLink } from "wouter";

type Props = { url: string; title: string; variant?: string };

const Cta = ({ url, title, variant = "" }: Props) => {
  return (
    <Button flex={1} variant={variant} as={WouterLink} href={url}>
      {title}
    </Button>
  );
};

export default Cta;
