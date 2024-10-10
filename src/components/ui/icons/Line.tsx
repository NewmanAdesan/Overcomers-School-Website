

import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={594}
    height={2}
    fill="none"
    {...props}
  >
    <path
      stroke="#EDEDED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1h592"
    />
  </svg>
)
export { SvgComponent as Line }
