import { ReactNode } from "react";


type Banner1Props = {
    content: ReactNode;
}

const Banner1 = ({content}: Banner1Props) => {
  return (
    <div className="h-56 sm:h-80 md:h-[404px] bg-slate-800 relative">
        <figure className="w-full h-full overflow-hidden">
            <img src="/banner1.png" alt="" className="size-full object-cover object-fit" />
        </figure>
        <h2 className="bg-white rounded-[10px] py-6 px-12 montserrat font-semibold text-24-auto md:text-3xl lg:text-32-auto text-shkula-primary absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-max shadow-blur">
            {content}
        </h2>
    </div>
  )
}

export default Banner1