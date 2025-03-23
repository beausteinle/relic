import React from 'react'
import styles from './styles.module.css'

export type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
}

const getSize = (size: string | undefined) => {
  switch (size) {
    case 'small':
      return styles.input_sm
    case 'large':
      return styles.input_lg
    default:
      return styles.input_md
  }
}

const Input = ({
  onChange,
  value,
  className,
  style,
  placeholder,
  size,
  disabled,
}: InputProps) => {
  return (
    <input
      className={`${styles.r_input} ${getSize(size)} ${className || ''}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={style || { maxWidth: '400px' }}
      disabled={disabled}
    />
  )
}

export default Input
