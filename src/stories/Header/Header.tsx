import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { NavigationItem, Navigation } from '../Navigation/Navigation'
import './Header.css'

interface HeaderProps {

}

const Header = ({}: HeaderProps) => {
    const navItems: NavigationItem[] = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "About",
            link: "#"
        },
        {
            name: "Projects",
            link: "#"
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