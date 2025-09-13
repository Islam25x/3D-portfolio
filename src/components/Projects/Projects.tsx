import { styles } from "../../styles"
import { projects } from "../../constants"
import ProjectsCard from "./ProjectsCard"
import Tilt from "react-parallax-tilt"
import { Typewriter } from "react-simple-typewriter"
function Projects() {
    return (
        <section id="Projects" className="mx-auto max-w-7xl px-5 sm:px-16 mt-40">
            {/* Intro */}
            <div
                className="top"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>

                {/* Typewriter paragraph */}
                <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    <Typewriter
                        words={[
                            "Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
                        ]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={30}
                        deleteSpeed={0}
                    />
                </p>
            </div>

            {/* Project cards */}
            <div className="mt-20 flex flex-wrap justify-center gap-7">
                {projects.map((project, i) => (
                    <div
                        key={project.name}
                        data-aos="zoom-in"
                        data-aos-delay={300 + i * 150}
                        className="w-full sm:w-[80%] md:w-[360px] p-2"
                    >
                        <Tilt
                            scale={1.05} 
                            tiltMaxAngleX={45}
                            tiltMaxAngleY={45}
                            transitionSpeed={450}
                            className="bg-tertiary p-5 rounded-2xl w-full h-full"
                        >
                            <ProjectsCard
                                name={project.name}
                                description={project.description}
                                tags={project.tags}
                                image={project.image}
                                source_code_link={project.source_code_link}
                            />
                        </Tilt>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Projects