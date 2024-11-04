import { SVGProps } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { schoolAddress, schoolEmail, schoolPhoneNumber, schoolPhoneNumber2, schoolSocialMediaLinks } from "@/data"
import Banner1 from "@/components/ui/Banner1"
import LinkedIn from "@/components/ui/icons/LinkedIn"


const bannerContent = <span>Contact{' '}Us</span>

const Section9 = () => {
  return (
    <section id="contact-section">
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
        <div className="bg-white-1 rounded-[20px] drop-shadow-2xl shadow-md pt-5 pb-8 px-5 text-schoolcom flex flex-col items-center gap-3 sm:gap-6 md:gap-12">
            <div className="flex flex-col gap-3 md:gap-0 items-center">
                <h3 className="poppins text-2xl leading-9 font-medium md:text-48-auto">Get in touch</h3>
                <ul className="flex gap-5 w-max">
                      <li>
                          <a href={schoolSocialMediaLinks.facebook} target="_blank" rel="noreferrer">
                              <Facebook />
                          </a>
                      </li>
                      <li>
                          <a href={schoolSocialMediaLinks.instagram} target="_blank" rel="noreferrer">
                              <Instagram />
                          </a>
                      </li>
                      <li>
                          <a href={schoolSocialMediaLinks.twitter} target="_blank" rel="noreferrer">
                              <Twitter />
                          </a>
                      </li>
                      <li>
                          <a href={schoolSocialMediaLinks.linkedIn} target="_blank" rel="noreferrer">
                            <LinkedIn className="size-6" />        
                          </a>
                      </li>
                </ul>
            </div>
            <ul className="flex flex-col gap-3 open-sans text-xs leading-150% sm:text-sm sm:leading-150% md:text-base md:leading-150% w-full sm:w-5/6">
                {/* school address */}
                <li className="flex gap-3">
                    <MapPin size={24} color="#4044A7" className="flex-shrink-0" />
                    <span>{
                      schoolAddress.length === 0
                      ? "Address Not Available"
                      : schoolAddress
                    }</span>
                </li>

                {/* school phone number */}
                <li className="flex gap-3">
                    <Phone size={24} color="#4044A7" className="flex-shrink-0" />
                    <span>{
                        schoolPhoneNumber.length === 0
                        ? "Phone Number Not Available"  
                        : schoolPhoneNumber
                      }</span>
                </li>

                {/* school phone number 2 */}
                <li className="flex gap-3">
                    <Phone size={24} color="#4044A7" className="flex-shrink-0" />
                    <span>{
                        schoolPhoneNumber2.length === 0
                        ? "Phone Number Not Available"  
                        : schoolPhoneNumber2
                      }</span>
                </li>

                {/* school email */}
                <li className="flex gap-3">
                    <Mail size={24} color="#4044A7" className="flex-shrink-0" />
                    <span>{
                      schoolEmail.length === 0
                      ? "Email Not Available"                       
                      : schoolEmail
                  }</span>
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