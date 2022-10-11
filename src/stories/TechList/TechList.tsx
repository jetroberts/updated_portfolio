interface TechListProps {
    listItems: string[]
}

const TechList = ({ listItems }: TechListProps) => {
    return (
        <>
            <h2>Tech Used</h2>
            <ul>
                {listItems.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}

export { TechList }