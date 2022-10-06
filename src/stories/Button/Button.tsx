import './Button.css'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
    label: string;
    primary?: boolean;
    size?: ButtonSize;
    onClick?: () => void;
}

const Button = ({ label, primary, size, onClick }: ButtonProps) => {
    const buttonType: string = primary ? 'primary' : 'secondary'
    return (
        <button
            onClick={onClick}
            type={'button'} 
            className={['button', 'button--' + buttonType, 'button--' + size].join(' ')}
        >
            {label}
        </button>
    )
}

export { Button }