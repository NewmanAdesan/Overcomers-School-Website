import { AlignJustify } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import styles from "./MobileNavLinks.module.css"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


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

const MobileNavLinks = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    
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
                                        <Link 
                                            to={`#${item.id}`} 
                                            className={styles.mobileNav}>
                                                {item.text}
                                        </Link>
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