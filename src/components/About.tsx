import Services from "./Services"
import { services } from "../constants"
import { styles } from "../styles"
import Tilt from "react-parallax-tilt"
import { Typewriter } from "react-simple-typewriter"
function About() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-5 sm:px-16">
            {/* Intro */}
            <div
                className="top mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
                <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    <Typewriter
                        words={[
                            "I turn ideas into real web applications.",
                            "Scalable SaaS dashboards built for production.",
                            "Powered by React & TypeScript.",
                            "Fast. Clean. User-focused.",
                            "Let’s build something that actually works.",
                        ]}
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
                        key={service.title}
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
                            <Services {...service} />
                        </Tilt>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default About