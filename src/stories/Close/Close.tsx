interface CloseProps {
    label: string
    onClick?: () => void
}

const Close = ({ label, onClick }: CloseProps) => {
    return (
        <button className="close" onClick={onClick}>{label}</button>
    )
}

export { Close }