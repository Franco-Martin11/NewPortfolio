import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#8D8D8D"
      d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15Z"
    />
    <path
      fill="#fff"
      d="M13.933 10.758V20h-2.228v-9.242h2.228Zm3.592 3.847v1.713h-4.227v-1.714h4.227Zm.362-3.847v1.72h-4.59v-1.72h4.59Z"
    />
  </svg>
);
export default SvgComponent;
