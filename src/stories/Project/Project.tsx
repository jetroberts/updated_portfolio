import { useReducer } from "react"
import { Button } from "../Button/Button"
import { ProjectInfo } from "../ProjectInfo/ProjectInfo"
import { Title } from "../Title/Title"
import "./Project.css"
import { createInitialState, reducer } from "./Project.reducer"

export interface ProjectProps {
    title: string
    children?: React.ReactNode
}

const Project = ({ title, children }: ProjectProps) => {
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

    const closeOnBackground = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((event.target as Element).id) {
            close()
        }
    }

    const darkenBackground = state.loadAnimation ? "darken" : ""

    return (
        <div id="project" className={["project", darkenBackground].join(" ")} onClick={(e) => closeOnBackground(e)}>
            <Title className={["project-title"].join(" ")} weight="light">{title}</Title>
            <p>{children}</p>
            <Button label={"More Info"} size={"sm"} onClick={onClick}/>
            {state.load ? <ProjectInfo title={title} close={close} open={state.loadAnimation}>{children}</ProjectInfo> : ""}
        </div>
    )
}

export { Project }