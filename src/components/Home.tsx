import { styles } from "../styles"
import ComputerCanvas from "./ComputerCanvas"
function Home() {
    return (
        <section className={`relative bg-hero-pattern w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                {/* Left accent line */}
                <div
                    className="flex flex-col justify-center items-center mt-5"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                {/* Intro text */}
                <div>
                    <h1
                        className={`${styles.heroHeadText} text-white`}
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        Hi, I'm <span className="text-[#915EFF]">Islam</span>
                    </h1>
                    <p
                        className={`${styles.heroSubText} mt-2 text-white-100`}
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        I`m a front end developer <br className="sm:block hidden" />
                        with experience in React.js and Three.js
                    </p>
                </div>
            </div>

            {/* Computer 3D Canvas */}
            <div
                className="w-full h-full flex justify-center items-center"
            >
                <ComputerCanvas />
            </div>
        </section>
    )
}

export default Home