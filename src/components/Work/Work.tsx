import { styles } from "../../styles";
import Experience from "./Experience";
import { experiences } from "../../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

function Work() {
    const { t } = useTranslation();

    return (
        <section id="work" className="mx-auto max-w-7xl px-5 sm:px-16 mt-40">
            <div className="text-center">
                <p className={styles.sectionSubText}>{t("work.sub")}</p>
                <h2 className={styles.sectionHeadText}>{t("work.title")}</h2>
            </div>

            <div className="mt-20">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <Experience
                            key={index}
                            title={t(experience.titleKey)}
                            company_name={t(experience.companyKey)}
                            date={t(experience.dateKey)}
                            iconBg={experience.iconBg}
                            points={experience.pointsKeys.map((pointKey) => t(pointKey))}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img
                                        src={experience.icon}
                                        alt={t(experience.companyKey)}
                                        className="w-[60%] h-[60%] object-contain"
                                    />
                                </div>
                            }
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Work;
