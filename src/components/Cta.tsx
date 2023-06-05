import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as WouterLink } from "wouter";

type Props = {
  url: string;
  title: string;
  variant?: string;
  icon?: ReactNode;
};

const Cta = ({ url, title, variant = "", icon }: Props) => {
  return (
    <Button
      flex={1}
      variant={variant}
      paddingY={variant && 2}
      as={WouterLink}
      href={url}
      gap={1}
    >
      {title}
      <>{icon}</>
    </Button>
  );
};

export default Cta;
