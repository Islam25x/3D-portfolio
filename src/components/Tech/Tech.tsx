import BallCanvas from "./BallCanvas"
import { technologies } from "../../constants"
function Tech() {
    return (
        <section id="Tech" className="mx-auto max-w-7xl px-5 sm:px-16 mt-20 flex flex-row flex-wrap justify-center gap-10">
            {
                technologies.map((technology , i) => (
                    <div
                        key={technology.name}
                        className="w-25 h-25"
                        data-aos="zoom-in"
                        data-aos-delay={i * 150} // stagger each ball
                    >
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))
            }
        </section>
    )
}

export default Tech