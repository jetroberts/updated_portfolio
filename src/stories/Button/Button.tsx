import './Button.css'

interface ButtonProps {
    label: string;
    primary: boolean;
    onClick?: () => void;
}

const Button = ({ label, primary, onClick }: ButtonProps) => {
    const buttonType: string = primary ? 'primary' : 'secondary'
    return (
        <button
            onClick={onClick}
            type={'button'} 
            className={['button', 'button--' + buttonType].join(' ')}
        >
            {label}
        </button>
    )
}

export { Button }