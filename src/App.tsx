import Section1 from "./components/section-1/Section1";
import Section10 from "./components/section-10/Section10";
import Section2 from "./components/section-2/Section2";
import Section3 from "./components/section-3/Section3";
import Section4 from "./components/section-4/Section4";
import Section5 from "./components/section-5/Section5";
import Section6 from "./components/section-6/Section6";
import Section7 from "./components/section-7/Section7";
import Section8 from "./components/section-8/Section8";
import Section9 from "./components/section-9/Section9";




function App() {

  return (
    <>
      <Section1 />
      <Section2 />
      <div className="mb-6 md:mb-12">
        <Section3 />
      </div>
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </>
  )

}

export default App
