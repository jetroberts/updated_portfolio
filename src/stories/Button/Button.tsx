import './Button.css'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
    label: string;
    primary?: boolean;
    size?: ButtonSize;
    margin?: number;
    className?: string;
    onClick?: () => void;
}

const Button = ({ label, primary, size, margin, className, onClick }: ButtonProps) => {
    const buttonType: string = primary ? 'primary' : 'secondary'
    return (
        <button
            onClick={onClick}
            type={'button'} 
            className={['button', 'button--' + buttonType, 'button--' + size, 'button--' + margin + 'm', className].join(' ')}
        >
            {label}
        </button>
    )
}

export { Button }