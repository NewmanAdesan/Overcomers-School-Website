import { useState } from "react"
import { Icon1 } from "../ui/icons/Icon1"
import { Line } from "../ui/icons/Line"


const Section3 = () => {
  return (
    <section id="about-us-section" className="mycontainer1 text-schoolcom md:-mt-16 lg:mt-0">
        <div className="flex flex-col gap-7">
            <Content1 />
            <Content2 />
        </div>
    </section>
  )
}

export default Section3




function Content1() {
    return (
        <div className="md:hidden"><AboutUsComponent1 /></div>
    )
}




function Content2() {
    return(
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <figure className="">
                <img src="/about-us-img.png" alt="" className="w-full" />
            </figure>
            <div>
                <div className="hidden md:block ">
                    <AboutUsComponent1 />
                </div>
                
                <Line className="hidden md:block my-6" />

                <AboutUsComponent2 />
            </div>
        </div>
    )
}




const schoolOverview = "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."

function AboutUsComponent1() {
    return (
        <div className="flex flex-col">
            <span className="flex gap-2.5 items-center montserrat sm:text-14-monteserrat-auto md:text-18-monteserrat-auto">
                <Icon1 className="w-6 md:w-8" />
                <span>About Us</span>
            </span>
            <span className="font-semibold montserrat text-24-auto md:text-3xl lg:text-35-montserrat-auto">Our School’s Overview</span>
            <span className="open-sans text-xs md:text-sm lg:text-base leading-150%">
                {schoolOverview}
            </span>
        </div>
    )
}




const aboutUsComponent2Data = [
    {
        value: "mission",
        label: "Misson",
        content: <>
            <p>
                At [School Name], our mission is to nurture a diverse and inclusive learning environment where every student is empowered to achieve their full potential. We are committed to fostering curiosity, critical thinking, and a passion for lifelong learning through innovative teaching methods, personalized support, and a holistic approach to education.
            </p>
            <p>
                At [School Name], our mission is to nurture a diverse and inclusive learning environment where every student is empowered to achieve their full potential. We are committed to fostering curiosity, critical thinking, and a passion for lifelong learning through innovative teaching methods, personalized support, and a holistic approach to education.
            </p>
        </>
    },
    {
        value: "vision",
        label: "Vison",
        content: <>
            <p>
            Our vision is to become a leading educational institution that inspires and prepares students to be confident, compassionate, and responsible global citizens. We aim to cultivate future leaders who are not only academically proficient but also ethically grounded and equipped to make a positive impact in their communities and the world.
            </p>
            <p>
            Our vision is to become a leading educational institution that inspires and prepares students to be confident, compassionate, and responsible global citizens. We aim to cultivate future leaders who are not only academically proficient but also ethically grounded and equipped to make a positive impact in their communities and the world.
            </p>
        </>
    },
    {
        value: "core-values",
        label: "Core Values",
        content: <>
            <p>
            <span style={{fontWeight: 700}} >Excellence:</span> We strive for academic excellence by fostering a culture of continuous improvement, innovation, and critical thinking. We believe in setting high standards and providing the resources and support needed to achieve them.
            </p>
            <p>
            <span style={{fontWeight: 700}} >Excellence:</span> We strive for academic excellence by fostering a culture of continuous improvement, innovation, and critical thinking. We believe in setting high standards and providing the resources and support needed to achieve them.
            </p>
        </>
    },

]

function AboutUsComponent2() {
    const [activeContent, setActiveContent] = useState("mission")
    const activeContentData = aboutUsComponent2Data.find(item => item.value === activeContent)
    return (
        <div className="w-full max-h-80 md:max-h-48 custom-scrollbar flex flex-col gap-3 md:gap-6 relative">
            <nav className="sticky top-0 bg-white raleway font-semibold text-12-raleway-auto lg:text-14-auto"><ul className="grid grid-cols-3 gap-3.5 md:gap-4 md2:gap-[18px]">
                {
                    aboutUsComponent2Data.map(
                        (item, index) => (
                            <AboutUsComponent2NavItem 
                                key={index}
                                value={item.value}
                                label={item.label}
                                activeContent={activeContent}
                                handleClick={() => setActiveContent(item.value)}
                            />
                        )
                    )
                }
            </ul></nav>
            <div className="flex flex-col gap-3 md:gap-5 md2:gap-6 open-sans text-xs md:text-sm lg:text-base">
                {
                    activeContentData 
                    &&
                    activeContentData.content
                }
            </div>
        </div>
    )
}




type AboutUsComponent2NavItemProps = {
    value: string,
    label: string,
    activeContent: string,
    handleClick: () => void,
}

function AboutUsComponent2NavItem({value, label, activeContent, handleClick}: AboutUsComponent2NavItemProps) {
    return (
        <li 
            onClick={() => handleClick()}
            className={`
                rounded-sm py-4 text-center 
                ${activeContent===value ? "bg-shkula-primary text-white" : "bg-gray-1"}
            `}>
            {label}
        </li>
    )
}