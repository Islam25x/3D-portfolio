import { memo } from "react"
import type { Projectprops } from "../../types/projects"

function ProjectsCard({ name, description, tags, image, source_code_link }: Projectprops) {
    return (
        <a
            href={source_code_link}
            target="_blank"
            rel="noreferrer"
            className="bg-tertiary rounded-2xl w-full h-full flex flex-col border border-white/5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(56,189,248,0.3)]"
        >
            <div className="mb-4">
                <img
                    className="w-full rounded-xl h-[230px] object-cover"
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="px-6">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px] leading-[22px]">{description}</p>
            </div>
            <div className="mt-auto pt-4 pb-6 px-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name}</p>
                ))}
            </div>
        </a>
    )
}

export default memo(ProjectsCard)
