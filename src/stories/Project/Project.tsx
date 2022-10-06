export interface ProjectProps {
    title: string,
    content: string
}

const Project = ({ title, content }: ProjectProps) => {
    return (
        <div className="project">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export { Project }