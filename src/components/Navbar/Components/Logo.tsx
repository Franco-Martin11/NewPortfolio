import { Button } from "@chakra-ui/react";
import { handleScrollTop } from "../../../utils";

const Logo = () => {
  return (
    // <WouterLink href="/">
    <Button
      variant={"unstyled"}
      title="scroll to top"
      type="button"
      onClick={handleScrollTop}
      _hover={{
        filter:
          "drop-shadow(0 0 0.75rem var(--chakra-colors-palette-secondaryPurple))",
        transition: "filter 0.5s ease",
      }}
    >
      {/* <svg
          width="48"
          height="51"
          viewBox="0 0 48 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.5862 0H4.41379C1.97612 0 0 1.97612 0 4.41379V46.3448C0 48.7825 1.97612 50.7586 4.41379 50.7586H43.5862C46.0239 50.7586 48 48.7825 48 46.3448V4.41379C48 1.97612 46.0239 0 43.5862 0Z"
            fill="url(#paint0_linear_313_10)"
          />
          <path
            d="M11.589 8.49943C11.6361 8.49943 35.6983 8.16981 35.8395 8.31107C36.4517 8.87614 36.7813 14.9035 36.7813 21.7313C34.8036 19.6123 31.272 16.8341 26.0451 16.0807C24.4441 15.704 23.1727 15.8452 23.1727 15.8452C22.2781 15.9394 21.6188 16.6457 21.713 17.5404C21.7601 18.2938 22.3722 18.8589 23.0786 19.0002C23.2198 19.0002 23.4082 19.0473 23.5965 19.0473C24.1145 19.0473 24.5383 19.0943 25.0092 19.1885C26.8456 19.6594 29.5297 21.59 28.3054 28.6062C24.915 27.6174 22.3251 28.2766 21.7601 29.1242C20.63 30.7252 21.5717 36.5642 22.5606 42.6386C17.0041 42.6386 11.7773 42.4031 11.4477 41.8852C10.5059 40.19 11.4477 8.64069 11.589 8.49943Z"
            fill="#1A1A2A"
          />
          <defs>
            <linearGradient
              id="paint0_linear_313_10"
              x1="7.63089e-07"
              y1="30.0422"
              x2="64.2365"
              y2="29.5537"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#94E4E2" />
              <stop
                offset="0.49121"
                stop-color="#94E4E2"
                stop-opacity="0.84375"
              />
              <stop offset="1" stop-color="#94E4E2" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg> */}
      <svg
        width="46"
        height="48"
        viewBox="0 0 46 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.2174 0H4.17391C1.86872 0 0 1.86872 0 4.17391V43.8261C0 46.1313 1.86872 48 4.17391 48H41.2174C43.5226 48 45.3913 46.1313 45.3913 43.8261V4.17391C45.3913 1.86872 43.5226 0 41.2174 0Z"
          fill="#C4AFF0"
        />
        <path
          d="M10.9592 8.03757C11.0037 8.03757 33.7582 7.72587 33.8918 7.85945C34.4707 8.39381 34.7824 14.0936 34.7824 20.5503C32.9122 18.5465 29.5725 15.9193 24.6297 15.2068C23.1157 14.8506 21.9134 14.9841 21.9134 14.9841C21.0674 15.0732 20.444 15.7411 20.533 16.5872C20.5775 17.2997 21.1564 17.834 21.8244 17.9676C21.9579 17.9676 22.1361 18.0121 22.3142 18.0121C22.804 18.0121 23.2048 18.0567 23.6501 18.1457C25.3867 18.591 27.9249 20.4167 26.7671 27.0516C23.561 26.1165 21.1119 26.7399 20.5775 27.5414C19.5088 29.0554 20.3994 34.5771 21.3345 40.3213C16.0801 40.3213 11.1373 40.0987 10.8256 39.6089C9.93503 38.0058 10.8256 8.17116 10.9592 8.03757Z"
          fill="#111111"
        />
      </svg>
    </Button>
    // </WouterLink>
  );
};

export default Logo;
