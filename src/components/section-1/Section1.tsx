import Header from "./Header"
import HeroContent from "./HeroContent"


const Section1 = () => {
  return (
    <div id="home-section" className=" w-screen h-screen min-h-[400px] max-h-[500px] md:min-h-[662px] md:max-h-[762px] bg-slate-800 relative">
        <Header />
        <HeroContent />
    </div>
  )
}

export default Section1


/**
 * 
 * 
 * MANAGING RESPONSIVENESS ACCROSS VARIOUS SCREEN HEIGHT
 * -----------------------------------------------------
 * UI1: section1 fills the screen height with a min-heigh as per the design
 * UI2: section1 fills the screen height with a min-height as per the design & a max-height which is a sensible number above the min-height
 * UI2: section fills the screen height just enough to show a bit of section2
 * 
 * 
 */