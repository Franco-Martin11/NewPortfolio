const Container = {
  variants: {
    section: {
      display: "flex",
      flexDir: "column",
      as: "section",
      position: "relative",
      gap: 8,
      width: "full",
      minH: "50vh",
      maxW: "1250px",
      margin: "0 auto !important",
      px: { base: 2, md: 4, lg: 8, xl: 10 },
    },
    overlay: {
      display: "flex",
      flexDir: "column",
      as: "section",
      position: "relative",
      gap: 8,
      width: "full",
      minH: "50vh",
      p: 0,
      m: "0 !important",
      maxW: "full",
    },
  },
};

export default Container;
