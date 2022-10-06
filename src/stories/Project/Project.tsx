import { Button } from "../Button/Button"
import { Title } from "../Title/Title"
import "./Project.css"

export interface ProjectProps {
    title: string,
    content: string
}

const Project = ({ title, content }: ProjectProps) => {
    return (
        <div className="project">
            <Title className={"project-title"} weight="light">{title}</Title>
            <p>{content}</p>
            <Button label={"More Info"} size={"sm"}/>
        </div>
    )
}

export { Project }