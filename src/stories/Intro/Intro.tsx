import { Button } from "../Button/Button"
import { Container } from "../Container/Container"
import { Heading } from "../Heading/Heading"
import "./Intro.css"

const Intro = () => {
    return (
        <Container className={["intro", "side"].join(" ")}>
            <div className={"introText"}>
                <Heading text={"Hi, I'm Josh"} size={"lg"} className={"header-animation"}/>
                <Heading text={"Full Stack Software Developer"} size={"md"} className={"header-animation"}/>
                <Heading text={"London based developer specialising in Go, React, and AWS"} size={"sm"} className={"header-animation"}/>
            </div>
            <Button label={"Next"} size={"md"} margin={3} className={"button-animation"}/>
        </Container>
    )
}

export { Intro }