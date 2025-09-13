import { styles } from "../../styles";
import Experience from "./Experience";
import { experiences } from "../../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Work() {
    return (
        <section id="work" className="mx-auto max-w-7xl px-5 sm:px-16 mt-40">
            <div className="text-center">
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </div>

            <div className="mt-20">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <Experience
                            key={index}
                            title={experience.title}
                            company_name = {experience.company_name}
                            date={experience.date}
                            iconBg={experience.iconBg}
                            points={experience.points}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img
                                        src={experience.icon}
                                        alt={experience.company_name}
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
