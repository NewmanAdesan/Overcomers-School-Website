import { SVGProps } from "react"

const Instagram = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <path
        stroke="#4044A7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 6.5h.01M7.5 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-10a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm9 9.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16.5 11.37Z"
      />
    </svg>
)

export default Instagram