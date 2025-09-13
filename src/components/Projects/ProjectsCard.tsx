import type { Projectprops } from "../../types/projects"

function ProjectsCard({ name, description, tags, image, source_code_link }: Projectprops) {
    return (
        <a href={source_code_link} target='_blank' className="bg-tertiary rounded-2xl sm:w-[360px] w-full">
            <div className="mb-4">
                <img className="w-full rounded-xl h-[230px]" src={image} alt={name} />
            </div>
            <div className="content-between">
                <div className="card-bottom">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
            </div>
            <div className=" mt-4 ms-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p className={`text-[14px] ${tag.color}`}>{tag.name}</p>
                ))}
            </div>
        </a>
    )
}

export default ProjectsCard