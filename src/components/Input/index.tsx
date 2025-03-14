import React from 'react'

export type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  style?: React.CSSProperties
  disabled?: boolean
}

const Input = ({ onChange, value, style, disabled }: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      style={style || { maxWidth: '400px' }}
      disabled={disabled}
    />
  )
}

export default Input
