import { useState } from "react"
import { Button } from "../Button/Button"
import { Title } from "../Title/Title"
import "./ProjectInfo.css"

interface ProjectInfoProps {
    open: boolean
    title: string
    date?: string
    children: React.ReactNode
}

const ProjectInfo = ({ open, title, date, children}: ProjectInfoProps) => {
    if(!open){
        return <></>
    }

    return (
        <div className="projectinfo">
            <Title className={"border"} weight={"light"}>{title}</Title>
            {children}
            <Button label={"close"} size={"sm"}/>
        </div>
    )
}

export { ProjectInfo }