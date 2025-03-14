import styles from './styles.module.css'

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
        return styles.button_sm
      case 'large':
        return styles.button_lg
      default:
        return styles.button_md
    }
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.r_button} ${getSize()} ${className ?? ''}`}
      disabled={disabled}
      style={style}
    >
      {text || children}
    </button>
  )
}

export default Button
