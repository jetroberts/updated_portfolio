import { Container } from "../Container/Container"
import { Heading } from "../Heading/Heading"
import "./Intro.css"

const Intro = () => {
    return (
        <Container className={"intro"}>
            <Heading text={"Hi, I'm Josh"} size={"lg"} />
            <Heading text={"Full Stack Software Developer"} size={"md"} />
            <Heading text={"London based developer specialising in Go, React, and AWS"} size={"sm"} />
        </Container>
    )
}

export { Intro }