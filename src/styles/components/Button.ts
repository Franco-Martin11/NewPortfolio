const Button = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    h: "fit-content",
    px: "var(--chakra-space-4)",
    py: "var(--chakra-space-2)",
    bgColor: "whiteAlpha.600",
    borderRadius: "md",
    borderBottomWidth: "4px",
    borderRightWidth: "4px",
    borderTopWidth: "1px",
    borderLeftWidth: "1px",
    borderColor: "whiteAlpha.800",
    fontSize: "md",
    fontWeight: "bold",
    textTransform: "uppercase",
    _hover: {
      borderColor: "whiteAlpha.900",
    },
  },
  variants: {
    primary: {
      bg: "palette.main",
      _hover: {
        bg: "var(--chakra-colors-orange-600)",
      },
      _disabled: {
        bg: "palette.main",
      },
      ":hover[disabled]": {
        bg: "palette.main",
      },
      ':hover[aria-disabled="true"]': {
        bg: "palette.main",
      },
    },
    secondary: {
      bg: "palette.secondary",
      px: "var(--chakra-space-4)",
      py: "var(--chakra-space-2)",
      letterSpacing: "var(--chakra-letterSpacings-widest)",
      _hover: {
        bg: "blackAlpha.600",
      },
    },
    outlineLink: {
      bg: "transparent",
      color: "palette.main",
      borderColor: "palette.main",
      px: "var(--chakra-space-4)",
      py: "var(--chakra-space-2)",
      _hover: {
        borderColor: "var(--chakra-colors-orange-100)",
        textDecoration: "underline",
      },
    },
  },
  // defaultProps: {
  //   variant: "primary",
  //   size: "regular",
  // },
};

export default Button;
