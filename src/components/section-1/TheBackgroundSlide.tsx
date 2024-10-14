

const bannerImages = [
    'section-6-img-10.jpeg',
    'section-6-img-9.jpeg',
    'section-6-img-7.jpeg',
    'section-6-img-6.jpeg',
    'section-6-img-11.jpeg',
]

const TheBackgroundSlide = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto bg-slate-800 absolute top-0 h-full -z-10">
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
            <div className="absolute inset-0 bg-black/70"></div>
        </figure>
    )
}