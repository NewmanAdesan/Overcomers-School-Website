
const Section10 = () => {
  return (
    <section className="bg-shkula-primary">
        <div className="mycontainer1 py-5 flex flex-col gap-3 md:gap-6 md:flex-row md:justify-between">

            {/* logo & description */}
            <div className="md:w-[60%]">
                <figure className="w-max mx-auto mb-3 sm:mb-4 md:mx-0 md:mb-5">
                    <img src="/ShkulaLogoWhite.png" alt="" className="w-24 sm:w-32 md:w-44 lg:w-52" />
                </figure>
                <p className="open-sans text-xs sm:text-sm md:text-base text-white">Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>

            {/* download store buttons */}
            <div className="w-max mx-auto flex gap-7 items-center">
                <button>
                    <img src="/google-play-btn.png" alt="" className="w-20 sm:w-28 lg:w-36" />
                </button>
                <button>
                    <img src="/apple-store-btn.png" alt="" className="w-24 sm:w-32 lg:w-44" />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Section10