import './button.css'

interface ButtonProps {
  onClick: () => void
  text: string
  className?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export const Button = ({
  onClick,
  text,
  className,
  size,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        className ||
        `color-white bg-color-primary border-none border-radius-5 size-${size ?? 'medium'}`
      }
      disabled={disabled}
    >
      {text}
    </button>
  )
}
