import "./Close.css"

interface CloseProps {
    onClick?: () => void
}

const Close = ({ onClick }: CloseProps) => {
    return (
        <button className="close" onClick={onClick}></button>
    )
}

export { Close }