export type SelectOption = {
  value: number | string
  label: string
  disabled?: boolean
  selected?: boolean
}

export type SelectProps = {
  options: SelectOption[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
  style?: React.CSSProperties
}

const Select = ({ options, onChange, disabled, style }: SelectProps) => {
  return (
    <select
      onChange={onChange}
      disabled={!!disabled}
      style={style || { width: '200px' }}
    >
      {options.map((option, i) => {
        return (
          <option
            key={`${option.value}-${i}`}
            value={option.value}
            selected={option.selected}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        )
      })}
    </select>
  )
}

export default Select
