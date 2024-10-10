
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <rect width={36} height={36} fill="#4044A7" fillOpacity={0.25} rx={8} />
    <path
      stroke="#4044A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m26.95 20.55-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11Z"
    />
  </svg>
)
export { SvgComponent as Icon1 }