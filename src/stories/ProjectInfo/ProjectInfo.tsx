import { useState } from "react"
import { Button } from "../Button/Button"
import { Close } from "../Close/Close"
import { Title } from "../Title/Title"
import "./ProjectInfo.css"

interface ProjectInfoProps {
    open: boolean
    title: string
    date?: string
    children: React.ReactNode
    close?: () => void
}

const ProjectInfo = ({ open, title, date, children, close}: ProjectInfoProps) => {
    if(!open){
        return <></>
    }

    return (
        <div className="projectinfo">
            <Close color={"white"} onClick={close}></Close>
            <Title className={"border"} weight={"light"}>{title}</Title>
            {children}
        </div>
    )
}

export { ProjectInfo }