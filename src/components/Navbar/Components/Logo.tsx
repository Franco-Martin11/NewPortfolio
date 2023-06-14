import { Link } from "@chakra-ui/react";
import { Link as WouterLink } from "wouter";

const Logo = () => {
  return (
    <WouterLink href="/project">
      <Link
        _hover={{
          filter:
            "drop-shadow(0 0 0.75rem var(--chakra-colors-palette-secondaryPurple))",
          transition: "filter 0.5s ease",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="22"
            fill="#251372"
            fillOpacity="0.25"
          />
          <path
            d="M13.834 30.5H10.688V15.76H21.358V18.554H13.834V22.206H20.104V25H13.834V30.5ZM24.2823 30.5H21.1363V15.76H25.2943L27.6923 21.238L29.0783 25.616L30.4643 21.238L32.8623 15.76H37.0203V30.5H33.8743V24.978L34.3143 19.038L32.5543 23.944L30.7283 27.948H27.4283L25.6023 23.944L23.8203 19.038L24.2823 24.978V30.5Z"
            fill="url(#paint0_linear_198_6)"
          />
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="22"
            stroke="url(#paint1_linear_198_6)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_198_6"
              x1="9.5"
              y1="23.9129"
              x2="44.6002"
              y2="27.0432"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#94E4E2" />
              <stop offset="0.514951" stopColor="#BCEEED" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_198_6"
              x1="4.47035e-8"
              y1="24"
              x2="48"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6F5BC6" />
              <stop offset="1" stopColor="#B6A4F3" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
    </WouterLink>
  );
};

export default Logo;
