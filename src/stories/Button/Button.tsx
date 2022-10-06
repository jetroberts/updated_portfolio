import internal from 'stream';
import './Button.css'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
    label: string;
    primary?: boolean;
    size?: ButtonSize;
    margin?: number;
    onClick?: () => void;
}

const Button = ({ label, primary, size, margin, onClick }: ButtonProps) => {
    const buttonType: string = primary ? 'primary' : 'secondary'
    return (
        <button
            onClick={onClick}
            type={'button'} 
            className={['button', 'button--' + buttonType, 'button--' + size, 'button--' + margin + 'm'].join(' ')}
        >
            {label}
        </button>
    )
}

export { Button }