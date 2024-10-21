import SpacingContainer from "../ui/SpacingContainer"
import Section6Content from "./Section6Content"


const Section6 = () => {
  return (
    <section id="beyond-the-classroom-section" className="mycontainer1 pt-4 pb-8 sm:pt-8 md:pt-1 lg:pb-0">
        <SpacingContainer className="mb-12 md:mb-24 lg:mb-16">
            <TheHeader />
        </SpacingContainer>
        <Section6Content />
    </section>
  )
}

export default Section6


function TheHeader() {
    return <h2 className="w-full max-w-[315px] md:max-w-[701px] mx-auto flex flex-col gap-1.5 text-gray-2 relative text-center">
        <span className="montserrat font-semibold text-24-auto md:text-48-montserrat-auto">Beyond the Classroom</span>
        <span className="montserrat font-regular text-14-monteserrat-auto md:text-32-auto">Developing Well-Rounded Individuals</span>
        <img src="/section-6-icon-L1.png" className="w-4 absolute left-3.5 top-[25px] md:top-[41px] md:left-[37px] md:w-6" />
        <img src="/section-6-icon-L2.png" className="w-4 absolute left-0 top-[36px] md:top-[59px] md:w-6" />
        <img src="/section-6-icon-L3.png" className="w-4 absolute left-3.5 top-[52px] md:top-[98px] md:left-[13px] md:w-6" />
        <img src="/section-6-icon-L4.png" className="hidden md:inline absolute left-[59px] top-[120px] " />
        <img src="/section-6-icon-R1.png" className="w-4 absolute right-[18px] top-[25px] md:top-[41px] md:right-[26.79px] md:w-6" />
        <img src="/section-6-icon-R2.png" className="hidden md:inline-block absolute right-0 top-[60px] w-[18.79px] h-[22.9px]" />
        <img src="/section-6-icon-R3.png" className="w-4 absolute right-0 top-[36px] md:top-[98px] md:right-[4.79px] md:w-6" />
        <img src="/section-6-icon-R4.png" className="w-4 md:w-6 absolute right-[18px] top-[52px] md:right-[40.79px] md:top-[117px] " />
    </h2>
}

