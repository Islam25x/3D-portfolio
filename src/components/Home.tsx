import { styles } from "../styles"
import { avatar } from "../assets"
function Home() {
    return (
        <section className="relative bg-hero-pattern w-full h-screen overflow-hidden mx-auto">
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
                                className={`font-medium lg:-mt-8 lg:text-[42px] sm:text-[35px] xs:text-[28px] text-[25px] lg:leading-[40px] text-white`}
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                Islam —
                                <span className="text-[#915EFF]">Frontend Engineer</span>
                            </h1>
                            <p
                                className={`${styles.heroSubText} mt-2 text-white-100`}
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                I build fast, scalable web apps that actually ship. <br className="sm:block hidden" />
                                built with React, TypeScript & clean architecture
                            </p>
                            <a
                                href="https://wa.me/201004791339?text=Hi%20Islam,%20I%20saw%20your%20portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex mt-6 bg-tertiary py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-primary cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-[#915EFF]"
                                data-aos="fade-up"
                                data-aos-delay="750"
                            >
                                Work With Me
                            </a>
                        </div>
                    </div>

                    {/* Avatar Image (3D preserved in codebase) */}
                    <div className="flex-none lg:flex-1 w-full h-[60vh] sm:h-[68vh] md:h-[72vh] lg:h-[680px] mt-6 sm:mt-8 md:mt-10 lg:mt-0">
                        <div className="relative w-full h-full flex justify-center lg:justify-end items-end lg:items-center">
                            <div
                                className="absolute right-6 lg:right-2 top-1/2 -translate-y-1/2 w-full h-full lg:w-full lg:h-full rounded-full blur-3xl opacity-70"
                                style={{
                                    background:
                                        "radial-gradient(closest-side, rgba(145,94,255,0.35), rgba(5,8,22,0))",
                                }}
                            />
                            <img
                                src={avatar}
                                alt="Islam avatar"
                                className="relative z-10 w-[360px] sm:w-[460px] md:w-[600px] lg:w-[760px] xl:w-[880px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(110,78,255,0.35)]"
                                data-aos="fade-left"
                                data-aos-delay="650"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
