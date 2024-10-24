import styles from "./DesktopNavLinks.module.css"


const links = [
    {
        text: "Home",
        id: 'home-section'
    },
    {
        text: "About Us",
        id: 'about-us-section'
    },
    {
        text: "Programs",
        id: 'programs-section'
    },
    {
        text: "Testimonial",
        id: 'testimonials-section'
    },
    {
        text: "Contact",
        id: 'contact-section'
    }
];

const DesktopNavLinks = () => {
  return (
    <nav className="h-12 md:w-[470px] md3:w-[511px] raleway font-semibold md:text-sm md3:text-base leading-48px text-white hidden md:block">
        <ul className="w-full h-full flex gap-6">
            {
                links.map((item, index) => (
                    <li key={index} className={`w-full h-full overflow-hidden ${styles.parent}`}>
                        <div className={`w-full h-[200%] flex flex-col ${styles.child}`}>
                            <a href={`#${item.id}`} className="w-full h-full flex items-center justify-center text-center text-white -tracking-2%">
                                <span>{item.text}</span>
                            </a>
                            <a href={`#${item.id}`} className="w-full h-full flex items-center justify-center text-center text-shkula-secondary -tracking-2%">
                                <span>{item.text}</span>
                            </a>
                        </div>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default DesktopNavLinks