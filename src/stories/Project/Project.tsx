import { useReducer, useRef, useState } from "react"
import { Button } from "../Button/Button"
import { ProjectInfo } from "../ProjectInfo/ProjectInfo"
import { Title } from "../Title/Title"
import "./Project.css"
import { createInitialState, reducer } from "./Project.reducer"

export interface ProjectProps {
    title: string,
    content: string
}

const Project = ({ title, content }: ProjectProps) => {
    const [state, dispatch] = useReducer(reducer, createInitialState())

    const onClick = () => {
        dispatch({ type: "openInfo"})
        dispatch({ type: "animateOpen"})
    }

    const close = () => {
        dispatch({ type: "animateClose"})
        setTimeout(() => {
            dispatch({ type: "closeInfo"})
        }, 500)
    } 

    return (
        <div className="project">
            <Title className={"project-title"} weight="light">{title}</Title>
            <p>{content}</p>
            <Button label={"More Info"} size={"sm"} onClick={onClick}/>
            {state.load ? <ProjectInfo title={title} close={close} open={state.loadAnimation}>{content}</ProjectInfo> : ""}
        </div>
    )
}

export { Project }