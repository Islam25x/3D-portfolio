import { styles } from "../styles"
import { avatar } from "../assets"
import { useTranslation } from "react-i18next"
function Home() {
    const { t, i18n } = useTranslation()
    const displayName = i18n.resolvedLanguage === "ar" ? "اسلام" : "Islam"
    const waMessage = t("home.whatsappMessage")
    const waUrl = `https://wa.me/201004791339?text=${encodeURIComponent(waMessage)}`

    return (
        <section className="relative bg-hero-pattern w-full h-screen overflow-hidden mx-auto">
            <div className={`max-w-7xl mx-auto ${styles.paddingX} pt-28 sm:pt-32`}>
                <div className="min-h-[calc(100vh-7rem)] sm:min-h-[calc(100vh-8rem)] lg:min-h-0 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-4 sm:gap-6 lg:gap-10">
                    <div className="flex flex-row items-start lg:-mt-8 gap-5 flex-1">
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
                                className={`font-medium lg:text-[42px] sm:text-[35px] xs:text-[28px] text-[25px] lg:leading-[40px] text-white`}
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                {displayName} —
                                <span className="text-[#915EFF]">{t("home.role")}</span>
                            </h1>
                            <p
                                className={`${styles.heroSubText} mt-2 text-white-100`}
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                {t("home.introLine1")} <br className="sm:block hidden" />
                                {t("home.introLine2")}
                            </p>
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 bg-tertiary py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-primary cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-[#915EFF]"
                                data-aos="fade-up"
                                data-aos-delay="750"
                            >
                                <span>{t("home.cta")}</span>
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 32 32"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                >
                                    <path d="M16.01 4C9.383 4 4 9.383 4 16.01c0 2.824.977 5.425 2.612 7.48L5 28l4.705-1.544a11.94 11.94 0 0 0 6.305 1.787c6.627 0 12.01-5.383 12.01-12.01C28.02 9.383 22.637 4 16.01 4zm0 21.884c-2.058 0-4.07-.563-5.821-1.628l-.415-.247-2.792.916.919-2.717-.27-.444A9.908 9.908 0 0 1 6.12 16.01c0-5.459 4.44-9.9 9.89-9.9 5.459 0 9.9 4.441 9.9 9.9 0 5.45-4.441 9.874-9.9 9.874zm5.78-7.264c-.317-.158-1.868-.922-2.158-1.024-.29-.107-.5-.158-.71.158-.21.317-.818 1.024-1.004 1.237-.186.21-.373.237-.69.079-.317-.158-1.336-.492-2.543-1.567-.94-.84-1.574-1.879-1.76-2.196-.186-.317-.02-.488.139-.646.142-.141.317-.373.475-.56.158-.186.21-.317.317-.527.107-.21.053-.395-.026-.553-.079-.158-.71-1.71-.974-2.344-.258-.62-.52-.535-.71-.545l-.606-.011c-.21 0-.553.079-.842.395-.29.317-1.11 1.085-1.11 2.647 0 1.563 1.136 3.074 1.294 3.286.158.21 2.236 3.41 5.415 4.78.756.326 1.345.521 1.805.667.758.241 1.448.207 1.993.126.608-.091 1.868-.763 2.132-1.502.264-.737.264-1.369.186-1.502-.079-.131-.29-.21-.606-.368z" />
                                </svg>
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
                                alt={t("home.avatarAlt")}
                                className="relative z-10 w-[360px] sm:w-[460px] md:w-[600px] lg:w-[760px] xl:w-[880px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(110,78,255,0.35)]"
                                style={i18n.resolvedLanguage === "ar" ? { transform: "rotateY(180deg)" } : undefined}
                                data-aos="fade-left"
                                data-aos-delay="650"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home


