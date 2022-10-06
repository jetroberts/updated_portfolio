import "./Heading.css"

interface HeadingProps {
    text: string
    size: Size
    className?: string
}

type Size = 'sm' | 'md' | 'lg'

const Heading = ({ text, size, className }: HeadingProps) => {
    return (
        <h1 className={["heading", "heading-" + size, className].join(" ")}>
            {text}
        </h1>
    )
}

export { Heading }