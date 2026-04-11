import { useMemo } from "react"
import { styles } from "../../styles"
import { projects } from "../../constants"
import ProjectsCard from "./ProjectsCard"
import { Typewriter } from "react-simple-typewriter"
import { useCarousel } from "../../hooks/useCarousel"
import { useTranslation } from "react-i18next"
function Projects() {
    const { t, i18n } = useTranslation()
    const typewriterWordsRaw = t("projects.typewriter", { returnObjects: true })
    const typewriterWords = Array.isArray(typewriterWordsRaw)
        ? typewriterWordsRaw
        : [String(typewriterWordsRaw)]

    const translatedProjects = useMemo(
        () =>
            projects.map((project) => ({
                ...project,
                name: t(project.nameKey),
                description: t(project.descriptionKey),
            })),
        [i18n.language, t]
    )

    const isRtl = i18n.resolvedLanguage === "ar";
    const { viewportRef, trackRef, loopItems, cardWidth, gap, isDragging, bindings } =
        useCarousel(translatedProjects, { gap: 24, speed: 18, direction: isRtl ? "rtl" : "ltr" });

    return (
        <section id="Projects" className="mx-auto max-w-7xl px-5 sm:px-16 mt-40">
            {/* Intro */}
            <div
                className="top"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <p className={styles.sectionSubText}>{t("projects.sub")}</p>
                <h2 className={styles.sectionHeadText}>{t("projects.title")}</h2>

                {/* Typewriter paragraph */}
                <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    <Typewriter
                        words={typewriterWords}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={35}
                        deleteSpeed={0}
                    />
                </p>
            </div>

            {/* Project cards */}
            <div
                ref={viewportRef}
                className={`mt-10 overflow-hidden select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}
                style={{ touchAction: "pan-y" }}
                {...bindings}
            >
                <div
                    ref={trackRef}
                    className="flex items-stretch will-change-transform"
                    style={{ gap: `${gap}px` }}
                >
                    {loopItems.map((project, i) => (
                        <div
                            key={`${project.name}-${i}`}
                            data-aos="zoom-in"
                            data-aos-delay={300 + (i % projects.length) * 120}
                            className="shrink-0 self-stretch"
                            style={{ width: cardWidth || 320 }}
                        >
                            <ProjectsCard
                                name={project.name}
                                description={project.description}
                                tags={project.tags}
                                image={project.image}
                                source_code_link={project.source_code_link}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Projects
