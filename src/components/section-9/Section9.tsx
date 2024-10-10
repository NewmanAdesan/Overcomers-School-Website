import { SVGProps } from "react"
import Banner1 from "../ui/Banner1"
import { Mail, MapPin, Phone } from "lucide-react"


const bannerContent = <span>Contact{' '}Us</span>

const Section9 = () => {
  return (
    <section>
        <Banner1 content={bannerContent} />
        <div className="mycontainer1 pt-14 pb-[74px] md:pt-28 md:pb-24">
            <Content />
        </div>
    </section>
  )
}

export default Section9




function Content() {
    return (
        <div className="bg-white-1 rounded-[20px] drop-shadow-2xl shadow-md py-5 px-5 text-schoolcom flex flex-col items-center gap-3 sm:gap-6 md:gap-12">
            <div className="flex flex-col gap-3 md:gap-0 items-center">
                <h3 className="poppins text-2xl leading-9 font-medium md:text-48-auto">Get in touch</h3>
                <ul className="flex gap-5 w-max">
                    <li>
                        <Facebook />
                    </li>
                    <li>
                        <Twitter />
                    </li>
                    <li>
                        <Instagram />
                    </li>
                    <li>
                        <Adobe />
                    </li>
                </ul>
            </div>
            <ul className="flex flex-col gap-3 open-sans text-xs leading-150% sm:text-sm sm:leading-150% md:text-base md:leading-150% max-w-48 sm:max-w-60 md:max-w-[442px]">
                <li className="flex gap-3">
                    <MapPin size={24} color="#4044A7" />
                    <span>Korem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </li>
                <li className="flex gap-3">
                    <Phone size={24} color="#4044A7" />
                    <span>Korem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </li>
                <li className="flex gap-3">
                    <Mail size={24} color="#4044A7" />
                    <span>Korem ipsum dolor sit amet, consectetur adipiscing elit.</span>

                </li>
            </ul>
        </div>
    )
}


const Facebook = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#4044A7"
          d="M24.5 12c0-6.627-5.373-12-12-12S.5 5.373.5 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.578V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H16.33c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C20.112 22.954 24.5 17.99 24.5 12Z"
        />
        <path
          fill="#fff"
          d="M17.171 15.469 17.703 12h-3.328V9.75c0-.949.465-1.875 1.956-1.875h1.513V4.922s-1.373-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.578v3.469h3.047v8.385a12.13 12.13 0 0 0 3.75 0V15.47h2.796Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  )

const Twitter = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#4044A7"
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

const Instagram = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
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

const Adobe = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#4044A7"
        d="M20.235 13.816c-.32-.315-1.03-.481-2.11-.496a18.01 18.01 0 0 0-2.534.186c-.414-.239-.842-.5-1.176-.813-.902-.842-1.655-2.01-2.123-3.296.03-.12.057-.225.081-.333 0 0 .509-2.884.373-3.86a1.05 1.05 0 0 0-.066-.275l-.043-.114c-.138-.318-.41-.656-.834-.638l-.257-.007c-.473 0-.859.241-.96.604-.307 1.136.011 2.834.585 5.033l-.146.358c-.413 1.005-.929 2.018-1.385 2.91l-.06.116c-.48.939-.915 1.735-1.31 2.41l-.406.216c-.03.015-.728.386-.891.485-1.389.83-2.309 1.77-2.462 2.517-.048.238-.012.543.234.684l.395.198a1.2 1.2 0 0 0 .535.129c.989 0 2.138-1.232 3.72-3.993a37.509 37.509 0 0 1 5.729-1.362c1.389.781 3.097 1.324 4.175 1.324.192 0 .356-.018.49-.054a.84.84 0 0 0 .487-.333c.209-.315.253-.748.195-1.192a.796.796 0 0 0-.235-.407l-.002.003ZM5.46 19.08c.18-.494.894-1.469 1.95-2.334.066-.054.23-.207.38-.35-1.105 1.761-1.844 2.463-2.33 2.682v.002Zm6.253-14.4c.319 0 .5.8.515 1.552.015.752-.16 1.28-.378 1.67-.18-.578-.269-1.488-.269-2.084 0 0-.013-1.138.132-1.138ZM9.848 14.94c.222-.395.451-.814.688-1.258a23.944 23.944 0 0 0 1.206-2.633 8.698 8.698 0 0 0 1.991 2.474c.098.083.202.166.311.249-1.599.316-2.979.7-4.196 1.168Zm10.08-.09c-.097.062-.376.096-.555.096-.579 0-1.296-.264-2.299-.696.386-.029.738-.043 1.057-.043.581 0 .753-.003 1.32.142.567.146.575.44.477.5v.001Z"
      />
      <path
        fill="#4044A7"
        d="M22.012 5.369c-.521-.71-1.247-1.541-2.044-2.337-.796-.797-1.627-1.523-2.337-2.043C16.422.102 15.836 0 15.5 0H3.875A1.878 1.878 0 0 0 2 1.875v20.25C2 23.159 2.841 24 3.875 24h17.25A1.878 1.878 0 0 0 23 22.125V7.5c0-.336-.102-.923-.988-2.131Zm-3.105-1.276c.72.72 1.284 1.369 1.7 1.907H17V2.393c.538.417 1.189.98 1.908 1.7ZM21.5 22.125a.38.38 0 0 1-.375.375H3.875a.38.38 0 0 1-.375-.375V1.875c0-.202.172-.375.375-.375H15.5v5.25a.75.75 0 0 0 .75.75h5.25v14.625Z"
      />
    </svg>
  )