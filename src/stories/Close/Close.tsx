import "./Close.css"

interface CloseProps {
    onClick?: () => void
    color?: string
}

const Close = ({ onClick, color }: CloseProps) => {
    return (
        <button className={["close", "close-" + color].join(" ")} onClick={onClick}></button>
    )
}

export { Close }