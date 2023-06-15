import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

interface SpinBox {
  [key: string]: string | object;
}

const SpinBox = ({ ...props }: SpinBox) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 600s linear`;
  return (
    <Box animation={animation} borderRadius={"xl"} {...props}>
      <>{props.children}</>
    </Box>
  );
};

export default SpinBox;
