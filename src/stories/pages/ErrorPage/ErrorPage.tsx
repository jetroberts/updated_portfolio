import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../Button/Button"
import "./ErrorPage.css"

const ErrorPage = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate("/")
    }

    return (
        <div className={"error"}>
            Oh no! The page you are looking for does not exist!
            <Button label={"Home"} onClick={onClick}></Button>
        </div>
    )
}

export { ErrorPage }