import { schoolAddress, schoolName, schoolTagline } from "@/data.tsx"
import { Button } from "../ui/button"
import DesktopCurvyDash from "../ui/icons/DesktopCurvyDash"
import MobileCurvyDash from "../ui/icons/MobileCurvyDash"
import styles from "./HeroContent.module.css"

export const _schoolName = '[School&nbsp;Name]'
export const _schoolTagline = 'Where Excellence Meets Opportunity'
export const _schoolHeroText = 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'

const HeroContent = () => {
  return (
    <div className="mycontainer1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  montserrat w-90vw md:max-w-[1140px]">
        {/* title */}
        <div className="w-full text-center text-white relative mb-10 md:mb-16">
            <h1 className="flex flex-col items-center">
                <span className="font-bold text-4xl md:text-6xl md:leading-[73px] mb-1">Welcome to <span>{schoolName}</span></span>
                <span className="font-semibold text-sm md:text-3xl">{schoolTagline}</span>
            </h1>
            <MobileCurvyDash className="md:hidden absolute -bottom-2 left-1/2 -translate-x-1/2" />
            <DesktopCurvyDash className="hidden md:block absolute -bottom-5 left-1/2 -translate-x-1/2" />
        </div>

        {/* description */}
        <p className="open-sans font-regular text-xs md:text-xl md:leading-9 mb-6 md:mb-52px text-center text-white">
            {schoolAddress}
        </p>

        {/* buttons */}
        <div className="w-max mx-auto flex gap-3.5 md:gap-6 raleway font-semibold text-white text-xs md:text-sm leading-9.5px md:leading-4 ">
            <a href="#contact-section">
                <Button className={` ${styles.parent1} flex gap-1 items-center w-[150.58px] h-[33.82px] xxs:w-[164.86px] xxs:h-[33.82px] md:w-[219.67px] md:h-14 rounded-19px md:rounded-32px bg-shkula-primary raleway text-xs font-semibold leading-[10px] md:text-sm`}>
                    <span>Schedule a Visit</span>
                    <svg className="size-[8.334px] md:size-[14px] text-[0px]" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50033 9.91668C5.88949 9.91668 4.58366 8.61084 4.58366 7.00001C4.58366 5.38918 5.88949 4.08334 7.50033 4.08334C9.11116 4.08334 10.417 5.38918 10.417 7.00001C10.417 8.61084 9.11116 9.91668 7.50033 9.91668ZM7.50033 11.6667C4.923 11.6667 2.83366 9.57734 2.83366 7.00001C2.83366 4.42268 4.923 2.33334 7.50033 2.33334C10.0777 2.33334 12.167 4.42268 12.167 7.00001C12.167 9.57734 10.0777 11.6667 7.50033 11.6667Z" fill="white"/>
                    </svg>
                </Button>
            </a>
            <a href="#contact-section">
                <Button className={` ${styles.parent2} flex gap-1 items-center w-[128.58px] h-[33.5px] xxs:w-[136.58px] xxs:h-[33.5px] md:w-[197.67px] md:h-14 rounded-19px md:rounded-32px bg-transparent shadow-yellow-inside-border-0.6px md:shadow-yellow-inside-border-1px raleway text-xs font-semibold leading-[10px] md:text-sm`}>
                    <span>Contact Us</span>
                    <svg className="size-[8.334px] md:size-[14px] text-[0px]" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50033 9.91668C5.88949 9.91668 4.58366 8.61084 4.58366 7.00001C4.58366 5.38918 5.88949 4.08334 7.50033 4.08334C9.11116 4.08334 10.417 5.38918 10.417 7.00001C10.417 8.61084 9.11116 9.91668 7.50033 9.91668ZM7.50033 11.6667C4.923 11.6667 2.83366 9.57734 2.83366 7.00001C2.83366 4.42268 4.923 2.33334 7.50033 2.33334C10.0777 2.33334 12.167 4.42268 12.167 7.00001C12.167 9.57734 10.0777 11.6667 7.50033 11.6667Z" fill="white"/>
                    </svg>
                </Button>
            </a>
        </div>

    </div>
  )
}

export default HeroContent