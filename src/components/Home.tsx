import { styles } from "../styles"
import AvatarCanvas from "./ComputerCanvas"
function Home() {
    return (
        <section className="relative bg-hero-pattern w-full min-h-screen mx-auto">
            <div className={`max-w-7xl mx-auto ${styles.paddingX} pt-28 sm:pt-32`}>
                <div className="min-h-[calc(100vh-7rem)] sm:min-h-[calc(100vh-8rem)] lg:min-h-0 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-4 sm:gap-6 lg:gap-10">
                    <div className="flex flex-row items-start gap-5 flex-1">
                        {/* Left accent line */}
                        <div
                            className="flex flex-col justify-center items-center mt-2"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                            <div className="w-1 sm:h-80 h-40 violet-gradient" />
                        </div>

                        {/* Intro text */}
                        <div>
                            <h1
                                className={`${styles.sectionHeadText} text-white`}
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                Islam — <span className="text-[#915EFF]">Frontend Engineer</span>
                            </h1>
                            <p
                                className={`${styles.heroSubText} mt-2 text-white-100`}
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                I turn ideas into production-ready web apps <br className="sm:block hidden" />
                                built with React, TypeScript & clean architecture
                            </p>
                        </div>
                    </div>

                    {/* 3D Avatar Canvas */}
                    <div className="flex-none lg:flex-1 w-full relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[600px] mt-6 sm:mt-8 md:mt-10 lg:mt-0">
                        <div className="absolute inset-x-0 bottom-0 h-full flex justify-center lg:justify-end items-end lg:items-center lg:static lg:h-full">
                            <AvatarCanvas />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
