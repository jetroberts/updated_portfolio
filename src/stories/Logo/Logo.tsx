import './Logo.css'

interface LogoProps {
    text: string
    primary?: boolean
}

const Logo = ({ text, primary }: LogoProps) => {
    const LogoType = primary ? 'primary' : 'secondary'
    return (
        <div className={['logo', 'logo--' + LogoType].join(' ')}>
            {text}
        </div>
    )
}

export { Logo }