import { AlignJustify } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import styles from "./MobileNavLinks.module.css"


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
      id: 'testimonial-section'
  },
  {
      text: "Contact",
      id: 'contact-section'
  }
];

const MobileNavLinks = () => {

  return (
    <Sheet>
        <SheetTrigger asChild>
          <button className="inline-block md:hidden">
              <AlignJustify color="white" />
          </button>
        </SheetTrigger>
        <SheetContent>
            <nav className="dmsans font-normal mt-6">
                <ul className="flex flex-col gap-3 transition-all duration-300">
                    {
                        links.map(
                            (item, index) => (
                              <li key={index}>
                                  <SheetClose asChild>
                                      <a href={`#${item.id}`} className={styles.mobileNav}>{item.text}</a>
                                  </SheetClose>
                              </li>
                            )
                        )
                    }
                </ul>
            </nav>
        </SheetContent>
    </Sheet>
);
}

export default MobileNavLinks