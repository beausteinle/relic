import React, { useId } from 'react'
import styles from './styles.module.css'

export type CheckboxPropType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  defaultChecked?: boolean
  children?: React.ReactNode
  disabled?: boolean
}

const Checkbox = ({
  onChange,
  label,
  defaultChecked,
  children,
  disabled,
}: CheckboxPropType) => {
  const id = useId()

  return (
    <div
      className={`${styles.checkboxContainer} ${disabled ? styles.disabled : ''}`}
    >
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className={styles.checkbox}
      />
      {(label || children) && (
        <label htmlFor={id} className={styles.label}>
          {label || children}
        </label>
      )}
    </div>
  )
}

export default Checkbox
