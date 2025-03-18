import { useId } from 'react'

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
    <>
      <input
        type="checkbox"
        onChange={onChange}
        name={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {(label || children) && <label htmlFor={id}>{label || children}</label>}
    </>
  )
}

export default Checkbox
