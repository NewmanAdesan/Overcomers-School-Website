import ShkulaLogoWhite from "../ui/icons/ShkulaLogoWhite"
import DesktopNavLinks from "./DesktopNavLinks"
import MobileNavLinks from "./MobileNavLinks"


const Header = () => {
  return (
    <header className="mycontainer1 pt-6 md:pt-0 h-auto md:h-24 flex items-center justify-between">
        <ShkulaLogoWhite className="w-[69px] h-6 md:w-[121px] md:h-[42px]" />
        <DesktopNavLinks />
        <MobileNavLinks />
    </header>
  )
}

export default Header