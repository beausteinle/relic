import module from './button.module.css'

export type ButtonProps = {
  onClick: () => void
  text?: string
  className?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Button = ({
  onClick,
  text,
  className,
  size,
  disabled,
  style,
  children,
}: ButtonProps) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return module.button_sm
      case 'large':
        return module.button_lg
      default:
        return module.button_md
    }
  }

  return (
    <button
      onClick={onClick}
      className={`${module.button} ${getSize()} ${className ?? ''}`}
      disabled={disabled}
      style={style}
    >
      {text || children}
    </button>
  )
}

export default Button
