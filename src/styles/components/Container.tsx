const Container = {
  variants: {
    section: {
        display: "flex",
        flexDir: "column",
        as: "section",
        position: "relative",
        gap: 8,
        width: "full",
        maxW: "1250px",
        minH: "50vh",
        margin: "0 auto !important",
        px: { base: 2, md: 4, lg: 8, xl: 10 },
    },
  },
};

export default Container;
