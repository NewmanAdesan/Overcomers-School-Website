import { ChevronLeft, ChevronRight } from "lucide-react";
import SpacingContainer from "../ui/SpacingContainer";
import { useEffect, useRef } from "react";



const Section6Content = () => {
  return (
    <>
        <SpacingContainer className="block sm:hidden">
          <MobileView />
        </SpacingContainer>
        <SpacingContainer className="pb-8 md:py-10 hidden sm:block">
            <DesktopView />
        </SpacingContainer>
    </>
  )
}

export default Section6Content


const clubData = [
    {
      title: "Art And Craft Club",
      desc: "A creative space where students can explore various forms of art, such as drawing, painting, sculpture, and crafts. Encourages self-expression and fine motor skills.",
      image: "section-6-img-1.jpeg"
    },
    {
      title: "Music and Choir",
      desc: "Students learn to play musical instruments, sing in a choir, or explore rhythm and sound through various music-making activities. Enhances musical skills, coordination, and teamwork.",
      image: "section-6-img-2.jpeg"
    },
    {
      title: "Sports Teams",
      desc: "Various sports teams and activities to promote physical fitness, teamwork, and discipline. Includes soccer, basketball, gymnastics, or track and field.",
      image: "section-6-img-3.jpeg"
    },
    {
      title: "Book Club",
      desc: "Encourages a love for reading by discussing books, sharing stories, and participating in reading challenges. Promotes literacy, comprehension, and a lifelong love of literature.",
      image: "section-6-img-8.jpeg"
    },
    {
      title: "Dance Club",
      desc: "An energetic activity where students can learn various dance forms, from ballet to hip-hop. Promotes physical fitness, coordination, and a sense of rhythm.",
      image: "section-6-img-9.jpeg"
    },
    {
      title: "Coding and Robotics",
      desc: "Introduces basic coding and robotics concepts to young students through fun, age-appropriate games and activities. Develops problem-solving and analytical thinking skills.",
      image: "section-6-img-10.jpeg"
    },
    {
      title: "Language And Culture",
      desc: "Provides exposure to different languages and cultures through interactive lessons, games, and cultural events. Fosters appreciation and understanding of global diversity. view more",
      image: "section-6-img-11.jpeg"
    },
    {
      title: "Drama and Theater",
      desc: "An opportunity for students to explore acting, scriptwriting, and stage production. Helps build confidence, public speaking skills, and creativity.",
      image: "section-6-img-4.jpeg"
    },
    {
      title: "Gardening Club",
      desc: "Students learn about planting, gardening, and the environment by growing flowers, vegetables, or herbs in a school garden. Promotes responsibility, patience, and an appreciation for nature.",
      image: "section-6-img-5.jpeg"
    },
    {
      title: "Chess Club",
      desc: "A club where students learn the basics of chess, develop strategic thinking, and enjoy friendly competition. Helps enhance cognitive abilities and problem-solving skills.",
      image: "section-6-img-6.jpeg"
    },
    {
      title: "Science Club",
      desc: "Fun, hands-on experiments and activities that encourage curiosity and foster a love for science. Activities may include basic chemistry experiments, nature walks, or building simple machines.",
      image: "section-6-img-7.jpeg"
    },
];
  

function MobileView() {
    return <div className="flex flex-col gap-6 w-full max-w-[401px] mx-auto">
        {
            clubData.map(
                (item, index) => (
                    <CardUI key={index} title={item.title} desc={item.desc} image={item.image}  />
                )
            )
        }
    </div>
}


type CardUIProps = {
    title: string,
    desc: string,
    image: string,
}
function CardUI({title, desc, image}: CardUIProps) {
    return <div className="shadow-blur relative rounded-[10px] overflow-hidden">
        <figure className="w-full h-[372px] md:h-[450px] lg:h-[535px] overflow-hidden">
            <img src={`/${image}`} alt="" className="w-full h-full object-center object-cover" loading="lazy" />
        </figure>
        <div className="bg-white absolute bottom-0 w-full h-[157px] md:h-[112px] rounded-[10px] px-2.5 flex items-center justify-center">
            <div className="flex flex-col gap-[5px] text-center">
                <h3 className="line-clamp-1 poppins text-24-auto-2 text-shkula-primary font-semibold">{title}</h3>
                <span className="line-clamp-5 open-sans text-black font-regular text-12-auto-2 md:hidden">{desc}</span>
            </div>
        </div>
    </div>
}

type SwiperWebComponent = HTMLElement & {
  swiper: {
    slidePrev: () => void;
    slideNext: () => void;
  };
};


function DesktopView() {
    const swiperContainerRef = useRef<SwiperWebComponent | null>(null)

    useEffect(() => {
      console.log(swiperContainerRef.current)
    }, [])

    function handleClick(buttonType: "left"|"right") {
      if (buttonType==="left" && swiperContainerRef.current) swiperContainerRef.current?.swiper.slidePrev();
      if (buttonType==="right" && swiperContainerRef.current) swiperContainerRef.current?.swiper.slideNext();
    }
    
    return (
        <div className="relative">
          <swiper-container 
              ref={swiperContainerRef}
              slides-per-view="2" 
              space-between="28"
              loop="true"
              breakpoints='{
                "700": {
                  "slidesPerView": 2
                },
                "1024": {
                  "slidesPerView": 3
                }
              }'
          >
              {
                  clubData.map(
                      (item, index) => (
                        <swiper-slide>
                            <CardUI key={index} title={item.title} desc={item.desc} image={item.image}  />
                        </swiper-slide>
                      )
                  )
              }
          </swiper-container>
          <div className="w-full flex justify-between absolute top-1/2 -translate-y-1/2 z-10">
            <button onClick={() => handleClick("left")} className="size-[60px] rounded-full bg-[#F77E23] flex-center-center relative -translate-x-1/2">
              <ChevronLeft size={30} color="white" />
            </button>
            <button onClick={() => handleClick("right")} className="size-[60px] rounded-full bg-[#F77E23] flex-center-center relative translate-x-6">
              <ChevronRight size={30} color="white" />
            </button>
          </div>
        </div>
    )
}