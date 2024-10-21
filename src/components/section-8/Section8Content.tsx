
import Facebook from "../ui/icons/Facebook";
import LinkedIn from "../ui/icons/LinkedIn";
import Twitter from "../ui/icons/Twitter";
import styles from "./Section8Content.module.css"


const data = [
    {
      name: "Tomiwa Adebowale",
      role: "Primary 1 Class Teacher",
      image: "section-8-img-2.webp"
    },
    {
      name: "Temiloluwa Olatunbosu",
      role: "Mathematics Teacher",
      image: "section-8-img-5.webp"
    },
    {
      name: "Chidinma Nwachukwu",
      role: "English Teacher",
      image: "educator3.webp"
    },
    {
      name: "Ayodele Ogunmola",
      role: "Primary 3 Class Teacher",
      image: "educator4.webp"
    },
    // {
    //   name: "Kelechi Okafor",
    //   role: "Primary 5 Class Teacher",
    //   image: "section-8-img-3.png"
    // },
    // {
    //   name: "Olumide Adedayo",
    //   role: "Physical Education Teacher",
    //   image: "section-8-img-11.jpeg"
    // },
    // {
    //   name: "Ngozi Chukwuma",
    //   role: "Fine Arts Teacher",
    //   image: "section-8-img-10.jpeg"
    // },
    // {
    //   name: "Samuel Abiodun",
    //   role: "Music Teacher",
    //   image: "section-8-img-8.jpeg"
    // }
  ];
  


const Section8Content = () => {
  return (
    <div className={`${styles['grid-container']}`}>
        {
            data.map(
                (item, index) => <GridItem key={index} name={item.name} role={item.role} image={item.image} extraStyle={index===3 ? 'md:col-start-2 lg:col-auto' : ''} />
            )
        }
    </div>
  )
}

export default Section8Content

type GridItemProps = {
    name: string,
    role: string,
    image: string,
    extraStyle: string,
}

function GridItem({name, role, image, extraStyle}: GridItemProps) {
    return <div  className={`${styles['grid-item']} ${extraStyle}`}>
        <figure className={`${styles['grid-figure']}`}>
            <img src={`/${image}`} alt="" className="w-full h-full object-cover object-center" />
        </figure>
        <div className={` ${styles['grid-content-1']}`}>
            <div className="flex flex-col gap-1.5 sm:gap-2.5 items-center overflow-hidden">
                <h4 className="text-shkula-primary montserrat text-14-monteserrat-auto font-bold tracking-[0.1px] sm:text-base">{name}</h4>
                <p className="text-schoolcom montserrat text-10-monteserrat-auto font-normal tracking-[0.2px] sm:text-xs mb-1 sm:mb-0">{role}</p>
                <div className="flex w-max gap-5 items-center">
                    <Facebook className="size-4 sm:size-6" />
                    <LinkedIn className="size-4 sm:size-6" />
                    <Twitter className="size-4 sm:size-6" />
                </div>
            </div>
        </div>
    </div>
}