import { VerticalTimelineElement } from "react-vertical-timeline-component";
import type { ExperienceProps } from "../../types/ExperienceProps";
function Experience({ title, date, iconBg, points, icon, company_name }: ExperienceProps) {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={date}
            iconStyle={{ background: iconBg, color: "#fff" }}
            icon={icon}
        >
            <h2 className="!text-white mb-[-.5rem]">{title}</h2>
            <p className="!text-sm text-gray-400">{company_name}</p>
            <ul>
                {points.map((point, index) => (
                    <li key={index} className="list-disc mt-4 ms-4">
                        {point}
                    </li>
                ))}
            </ul>
            <p className="text-gray-400">{date}</p>
        </VerticalTimelineElement>
    );
}

export default Experience;
