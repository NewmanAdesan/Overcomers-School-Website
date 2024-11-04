import Section1 from "./components/homepage/section-1/Section1";
import Section10 from "./components/section-10/Section10";
import Section11 from "./components/section-11/Section11";
import Section2 from "./components/section-2/Section2";
import Section2B from "./components/homepage/section-2B/Section2B";
import Section3 from "./components/homepage/section-3/Section3";
import Section4 from "./components/section-4/Section4";
import Section5 from "./components/section-5/Section5";
import Section6 from "./components/section-6/Section6";
import Section7 from "./components/section-7/Section7";
import Section8 from "./components/section-8/Section8";
import Section9 from "./components/section-9/Section9";




function App() {

  return (
    <>
      <Section1 />    {/* Banner Section */}
      <Section2 />    {/* Latest News Section */}
      <Section2B />   {/*  */}
      <div className="mb-6 md:mb-12">
        <Section3 />  {/* About Us Section */}
      </div>
      <Section4 />    {/* Our Programs Section */}
      <Section5 />    {/* Testimonial Section */}
      <Section6 />    {/* Beyond The Classroom Section */}
      <Section7 />    {/* Admission Information Section */}
      <Section8 />    {/* Our Educators Section */}
      <Section9 />    {/* Contact Section */}
      <Section10 />   {/* Shkula Advertisement */}
      <Section11 />
    </>
  )

}

export default App
