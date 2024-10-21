import { footerLinksData, schoolLogo, schoolName, schoolTagline } from "@/data"

const Section11 = () => {
  return (
    <section className="bg-white mycontainer1 pt-4 pb-3 md:pt-16 md:pb-12">
        {/* school-identity & page-sections-links */}
        <Content1 />


        <Content2 />
    </section>
  )
}

export default Section11

const Content1 = () => {
    return <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-16">
        {/* school-identity */}
        <Content1A />

        {/* page-sections-links */}
        <Content1B />
    </div>
}

const Content2 = () => {
    return <></>
}

const Content1A = () => {
    return <div className="space-y-2 md:space-y-8 md:w-[320px]">
        <div className="flex items-center gap-1 md:gap-2.5">
            <figure className="size-4 md:size-8 overflow-hidden">
                <img src={"/" + schoolLogo} alt="" className="size-full object-cover object-center"/>
            </figure>
            <span className="text-gray-900 montserrat text-xs md:text-base font-medium">{schoolName}</span>
        </div>
        <p className="open-sans text-xs text-[#667085] md:text-base">{schoolTagline}</p>
    </div>
}




const Content1B = () => {
    return <ul className="py-3 flex gap-3.5 justify-between md:py-0 md:gap-4 md:w-full">
        {
            footerLinksData.map(
                (item, index) => (
                    <Content1BLinkGroup key={index} title={item.title} links={item.links} />
                )
            )
        }
    </ul>
}
type Content1BLinkGroupProps = {
    title: string,
    links: {
        label: string,
        linkTo: string
    }[]
}
const Content1BLinkGroup = ({title, links}: Content1BLinkGroupProps) => {
    return (
        <li className="flex flex-col">
            <h4 className="montserrat font-semibold text-xs text-dark-1 mb-1 md:mb-4 md:text-sm">{title}</h4>
             {links.map((item, index) => (<a href={item.linkTo} key={index} className="monteserrat text-[10px] mb-[3px] text-shkula-primary md:mb-3 md:text-base">{item.label}</a>))}
        </li>
    )
}