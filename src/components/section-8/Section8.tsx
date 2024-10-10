import SpacingContainer from "../ui/SpacingContainer"
import Section8Content from "./Section8Content"


const Section8 = () => {
  return (
    <section className="mycontainer1 py-5 sm:pt-6 sm:pb-10 md:pb-12">
        <SpacingContainer className="mb-5 md:mb-9">
            <Heading2 title="Meet Our Educators" />
        </SpacingContainer>
        <SpacingContainer className="mb-5 md:mb-0">
            <Section8Content />
        </SpacingContainer>
    </section>
  )
}

export default Section8


function Heading2({title}: {title: string}) {
    return <h2 className="text-center montserrat font-semibold text-24-auto tracking-[0%] md:text-48-montserrat-auto">{title}</h2>
}
