import { bannerImages } from "@/data.tsx"


const TheBackgroundSlide = () => {
  return (
    <div className="w-full max-w-[1600px] bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 h-full -z-10">
        <swiper-container 
            loop="true" 
            autoplay='{
                "delay": 3000
            }'
            effect="fade"
            fade-effect='{
                "crossFade": true
            }'
            speed="3000"
            style={{height: "100%"}}
        >
            {
                bannerImages.map((item, index) => (
                    <swiper-slide>
                        <Slide image={item} key={index} />
                    </swiper-slide>
                ))
            }
        </swiper-container>
    </div>
  )
}
export default TheBackgroundSlide


const Slide = ({image}: {image: string}) => {
    return (
        <figure className="w-full h-full relative">
            <img src={`/${image}`} alt="" className="w-full h-full object-cover object-center" loading="lazy" />
            <div className="absolute inset-0 bg-black/60"></div>
        </figure>
    )
}
