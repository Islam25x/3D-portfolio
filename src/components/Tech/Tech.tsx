import { memo, useState } from "react"
import BallCanvas from "./BallCanvas"
import { technologies } from "../../constants"
import { styles } from "../../styles"
import { useTranslation } from "react-i18next"
import { useInView } from "../../hooks/useInView"

type Technology = {
    name: string
    icon: string
}

type TechnologyItemProps = {
    technology: Technology
    index: number
    isActive: boolean
}

const TechnologyItem = memo(function TechnologyItem({ technology, index, isActive }: TechnologyItemProps) {
    const [isHovered, setIsHovered] = useState(false)

    const wrapperClassName = `w-25 h-25 transition-transform duration-200 ease-out will-change-transform ${isHovered ? "scale-105" : "scale-100"}`
    const labelClassName = `text-sm text-gray-300 text-center whitespace-nowrap select-none transition-opacity transition-transform duration-200 ease-out ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`

    return (
        <div
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
        >
            <div className={wrapperClassName}>
                <BallCanvas
                    icon={technology.icon}
                    isActive={isActive}
                    onPointerOver={() => setIsHovered(true)}
                    onPointerOut={() => setIsHovered(false)}
                />
            </div>

            <div className="mt-2 h-5 flex items-center justify-center pointer-events-none">
                <span className={labelClassName}>{technology.name}</span>
            </div>
        </div>
    )
})

function Tech() {
    const { t } = useTranslation()
    const { ref: sectionRef, inView } = useInView<HTMLElement>({ rootMargin: "200px 0px" })

    return (
        <section ref={sectionRef} id="Tech" className="mx-auto max-w-7xl px-5 sm:px-16 mt-20">
            <div className="text-center" data-aos="fade-up">
                <h2 className={styles.heroSubText}>
                    {t("tech.title")}
                    <span className="text-[#915EFF]">{t("tech.highlight")}</span>
                </h2>
            </div>

            <div className="mt-16 flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology, index) => (
                    <TechnologyItem
                        key={technology.name}
                        technology={technology}
                        index={index}
                        isActive={inView}
                    />
                ))}
            </div>
        </section>
    )
}

export default Tech
