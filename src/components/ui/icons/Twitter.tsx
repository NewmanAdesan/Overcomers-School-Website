import { SVGProps } from "react"


interface TwitterProps extends SVGProps<SVGSVGElement> {
  primaryFill?: string;
}

const Twitter = ({ primaryFill = "#4044A7", ...props }: TwitterProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={primaryFill}
          d="M8.048 21.75c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24.5 4.555a9.815 9.815 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.196 4.929 4.929 0 0 0-8.391 4.49A13.98 13.98 0 0 1 2.17 3.149 4.928 4.928 0 0 0 3.695 9.72a4.88 4.88 0 0 1-2.235-.616v.062a4.926 4.926 0 0 0 3.95 4.827 4.915 4.915 0 0 1-2.223.084 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 .5 19.538a13.941 13.941 0 0 0 7.548 2.209"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  )

export default Twitter