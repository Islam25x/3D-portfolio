import Services from "./Services"
import { services } from "../constants"
import { styles } from "../styles"
import Tilt from "react-parallax-tilt"
import { Typewriter } from "react-simple-typewriter"
import { useTranslation } from "react-i18next"
function About() {
    const { t } = useTranslation()
    const typewriterWordsRaw = t("about.typewriter", { returnObjects: true })
    const typewriterWords = Array.isArray(typewriterWordsRaw)
        ? typewriterWordsRaw
        : [String(typewriterWordsRaw)]

    return (
        <section id="about" className="mx-auto max-w-7xl px-5 sm:px-16">
            {/* Intro */}
            <div
                className="top mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <p className={styles.sectionSubText}>{t("about.sub")}</p>
                <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
                <p className="mt-4 text-secondary lg:text-[17px] md:text-[17px] max-w-3xl text-[13px] leading-[30px]">
                    <Typewriter
                        words={typewriterWords}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={45}
                        deleteSpeed={20}
                        delaySpeed={1800}
                    />
                </p>
            </div>

            {/* Services */}
            <div className="mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
                {services.map((service, i) => (
                    <div
                        key={service.titleKey}
                        data-aos="zoom-in"
                        data-aos-delay={300 + i * 150}
                        className="w-full sm:w-[48%] md:w-[30%] lg:w-[28%] xl:w-[23%] p-2"
                    >
                        <Tilt
                            tiltMaxAngleX={35}
                            tiltMaxAngleY={35}
                            scale={1.05}
                            transitionSpeed={450}
                            className="green-pink-gradient p-[1px] rounded-[20px] shadow-card w-full h-full"
                        >
                            <Services icon={service.icon} title={t(service.titleKey)} />
                        </Tilt>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default About
