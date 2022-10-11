import { Close } from "../Close/Close"
import { Title } from "../Title/Title"
import "./ProjectInfo.css"

interface ProjectInfoProps {
    open: boolean
    title: string
    date?: string
    close?: () => void
    children: React.ReactNode
}

const ProjectInfo = ({ open, title, date, children, close}: ProjectInfoProps) => {
    const openClass = open ? "openInfo" : "closeInfo"
    return (
        <div className={["projectinfo", openClass].join(" ")}>
            <Close color={"white"} onClick={close}></Close>
            <Title className={"border"} weight={"light"}>{title}</Title>
            {children}
        </div>
    )
}

export { ProjectInfo }