

import { SVGProps } from "react"
const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4.709 6.65a1.737 1.737 0 1 1 0-3.475 1.737 1.737 0 0 1 0 3.475Zm0 1.042a2.78 2.78 0 1 1 0-5.56 2.78 2.78 0 0 1 0 5.56Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Circle
