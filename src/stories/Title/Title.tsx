import "./Title.css"

type Weight = 'light' | 'med' | 'heavy'

interface TitleProps {
    children: React.ReactNode;
    className?: string;
    weight?: Weight;
}

const Title = ({ children, className, weight }: TitleProps) => {
    return (
        <h1 className={["title", className, "title-" + weight].join(" ")}>
            {children}
        </h1>
    )
}

export { Title }