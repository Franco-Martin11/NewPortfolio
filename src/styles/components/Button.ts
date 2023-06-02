const Button = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    h: "fit-content",
    px: "var(--chakra-space-4)",
    py: "var(--chakra-space-2)",
    bgColor: "palette.main",
    borderRadius: "md",
    borderBottomWidth: "2px",
    borderRightWidth: "2px",
    borderTopWidth: "1px",
    borderLeftWidth: "1px",
    borderColor: "whiteAlpha.600",
    fontSize: "md",
    fontWeight: "bold",
    textTransform: "uppercase",
    _hover: {
      borderColor: "whiteAlpha.800",
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
      px: "var(--chakra-space-8)",
      py: "var(--chakra-space-1)",
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
  defaultProps: {
    variant: "primary",
    size: "regular",
  },
};

export default Button;
