import { ReactNode } from "react"
import { admissionsSectionIntro, howToApplySectionContent } from "@/data"
import Banner1 from "@/components/ui/Banner1"
import { Button } from "@/components/ui/button"
import SpacingContainer from "@/components/ui/SpacingContainer"

const bannerContent = (
    <span>
    <span className="hidden lg:inline">Admission!{'  '}</span>
    <span className="hidden md:inline">Admission!!{'  '}</span>
    <span className="inline">Admission!!!</span>
</span>
)

const Section7 = () => {
  return (
    <section id="admission-information-section">
        <Banner1 content={bannerContent} />
        <div className="mycontainer1">
            <Content />
        </div>
    </section>
  )
}

export default Section7




function Content() {
    return (
        <div className="pt-14 pb-4 md:pt-24 md:pb-11 lg:pt-36">
            <SpacingContainer className="mb-8">
                <SpacingContainer className="mb-0 md:mb-6">
                    <Heading3>ADMISSIONS</Heading3>
                </SpacingContainer>
                <Paragraph>
                    {admissionsSectionIntro}
                </Paragraph>
            </SpacingContainer>

            <SpacingContainer className="mb-5">
                <SpacingContainer className="mb-0 md:mb-6">
                    <Heading3 type="B">HOW TO APPLY</Heading3>
                </SpacingContainer>
                <SpacingContainer className="space-y-3 md:space-y-2">
                    {
                        howToApplySectionContent.map(
                            (item, index) => (
                                <Paragraph key={index}>
                                    {item}
                                </Paragraph>
                            )
                        )
                    }
                </SpacingContainer>
            </SpacingContainer>

            <SpacingContainer className="flex gap-2 md:gap-6 w-max mx-auto sm:mx-0">
                <a href="#contact-section">
                    <Button variant="none" size="none" className="rounded-32px bg-shkula-primary flex gap-1 md:gap-1.5 items-center py-2.5 md:py-5 px-5 md:px-[52px] text-white raleway text-xs sm:text-14-auto font-semibold" >
                        <span>Apply Now</span>
                        <CircleSVG fill="white" />
                    </Button>
                </a>
                <a href="#contact-section">
                    <Button variant="none" size="none" className="rounded-32px bg-white flex gap-1 md:gap-1.5 items-center py-2.5 md:py-5 px-5 md:px-[52px] text-schoolcom raleway text-xs sm:text-14-auto font-semibold ring-1 ring-offset-0 ring-shkula-primary" >
                        <span>Request Information</span>
                        <CircleSVG fill="#313131" />
                    </Button>
                </a>
            </SpacingContainer>

        </div>
    )
}


function Heading3 ({children, type='A'}: {children: ReactNode, type?: 'A'|'B'}) {
    return (
        <h3 className={`montserrat text-16-auto md:text-24-auto ${type==='A' ? 'tracking-[20%]': 'tracking-[0%]'} text-gray-2 font-semibold`}>{children}</h3>
    )
}

function Paragraph ({children}: {children: ReactNode}) {
    return (
        <p className="open-sans text-xs sm:text-sm md:text-base md:leading-150% text-schoolcom">{children}</p>
    )
}

function CircleSVG ({fill}: {fill: string}) {
    return  (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 9.91683C5.38949 9.91683 4.08366 8.61099 4.08366 7.00016C4.08366 5.38933 5.38949 4.0835 7.00033 4.0835C8.61116 4.0835 9.91699 5.38933 9.91699 7.00016C9.91699 8.61099 8.61116 9.91683 7.00033 9.91683ZM7.00033 11.6668C4.423 11.6668 2.33366 9.57749 2.33366 7.00016C2.33366 4.42283 4.423 2.3335 7.00033 2.3335C9.57765 2.3335 11.667 4.42283 11.667 7.00016C11.667 9.57749 9.57765 11.6668 7.00033 11.6668Z" fill={fill}/>
        </svg>
    )
}
