import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { NavigationItem, Navigation } from '../Navigation/Navigation'
import './Header.css'

const Header = () => {
    const navItems: NavigationItem[] = [
        {
            name: "Home",
            link: ""
        },
        {
            name: "About",
            link: "about"
        },
        {
            name: "Projects",
            link: "projects"
        }
    ]

    return (
        <Container className={'header'}>
            <Logo text={'JR'} primary />
            <Navigation NavigationItems={navItems}/>
        </Container>
    )
}

export { Header }