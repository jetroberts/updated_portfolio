import "./Navigation.css"
import { Link } from "react-router-dom"

export interface NavigationItem {
  name: string,
  link: string
}

interface NavigationProps {
  NavigationItems: NavigationItem[],
}

const Navigation = ({ NavigationItems }: NavigationProps) => {
  return (
    <nav className="nav">
      <ul>
        {NavigationItems.map((nav) => {
          return (
            <li>
              <Link className={'link'} to={nav.link}>{nav.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { Navigation }