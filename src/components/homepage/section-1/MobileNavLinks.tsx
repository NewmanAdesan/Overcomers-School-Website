import { AlignJustify } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import styles from "./MobileNavLinks.module.css"
import { useState } from "react";


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

   const [open, setOpen] = useState(false)

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
        e.preventDefault();

        // Get the target element ID from the href attribute
        const targetElement = document.getElementById(id);

        // Check if target element exists
        if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: "smooth" });

        // Update the URL hash without scrolling to it directly
        window.history.pushState(null, "", `#${id}`);
        }
  }

  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
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
                                      <a href={`#${item.id}`} className={styles.mobileNav} onClick={(e) => handleClick(e, item.id)}>{item.text}</a>
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