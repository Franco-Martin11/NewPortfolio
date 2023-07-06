import { MediaLink } from "../../../../types/types";
import { Tooltip, Box } from "@chakra-ui/react";

const AnchoreButton = ({
  route,
  ariaLabel,
  icon: JsxIcon,
  id,
  label,
}: MediaLink) => {
  const handleDownloadPdf = () => window.open(route, "_blank");
  return (
    <Tooltip
      defaultIsOpen={true}
      bg={"palette.secondaryPurple"}
      label={label}
      placement="left"
      display={{base:'none',md:'flex'}}
    >
      {id !== 4 ? (
        <Box
          as="a"
          _hover={{
            filter:
              "drop-shadow(0 0 1rem var(--chakra-colors-palette-secondaryPurple))",
            transition: "filter 0.25s ease",
          }}
          rel="noopener"
          target="_blank"
          href={route}
          aria-label={ariaLabel}
        >
          <JsxIcon size="32px" />
        </Box>
      ) : (
        <Box
          as="button"
          position={"relative"}
          _hover={{
            filter:
              "drop-shadow(0 0 1rem var(--chakra-colors-palette-secondaryPurple))",
            transition: "filter 0.25s ease",
          }}
          onClick={handleDownloadPdf}
          type="button"
        >
          <JsxIcon size="32px" />
        </Box>
      )}
    </Tooltip>
  );
};

export default AnchoreButton;
