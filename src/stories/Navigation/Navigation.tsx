import "./Navigation.css"

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
              <a className={'link'} href={nav.link}>{nav.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { Navigation }