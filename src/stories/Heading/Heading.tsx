import "./Heading.css"

interface HeadingProps {
    text: string
    size: string
}

const Heading = ({ text, size }: HeadingProps) => {
    return (
        <h1 className={["heading", "heading-" + size].join(" ")}>
            {text}
        </h1>
    )
}

export { Heading }