import Section1 from "../homepage/section-1/Section1";
import Section10 from "../homepage/section-10/Section10";
import Section11 from "../homepage/section-11/Section11";
import Section2 from "../homepage/section-2/Section2";
import Section2B from "../homepage/section-2B/Section2B";
import Section3 from "../homepage/section-3/Section3";
import Section4 from "../homepage/section-4/Section4";
import Section5 from "../homepage/section-5/Section5";
import Section6 from "../homepage/section-6/Section6";
import Section7 from "../homepage/section-7/Section7";
import Section8 from "../homepage/section-8/Section8";
import Section9 from "../homepage/section-9/Section9";



export default function HomePage() {
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


