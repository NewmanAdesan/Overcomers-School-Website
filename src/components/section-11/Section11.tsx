
const Section11 = () => {
  return (
    <section className="bg-white mycontainer pt-4 pb-3 md:pt-16 md:pb-12">
        <Content1 />
        <Content2 />
    </section>
  )
}

export default Section11

const Content1 = () => {
    return <div className="flex flex-col gap-4">
        <Content1A />
        <Content1B />
    </div>
}

const Content2 = () => {
    return <></>
}

const Content1A = () => {
    return <div className="space-y-2">
        <div className="flex items-center gap-1">
            <figure className="size-4 overflow-hidden">
                <img src="/section-11-img.png" alt="" className="size-full object-cover object-center"/>
            </figure>
        </div>
        <p>
            Design amazing digital experiences that create more happy in the world.
        </p>

    </div>
}

const Content1B = () => {
    return <></>
}