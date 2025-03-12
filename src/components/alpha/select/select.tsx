export type SelectOption = {
  value: string | number | readonly string[] | undefined
  label: string
  disabled?: boolean
  selected?: boolean
}

export type SelectProps = {
  options: SelectOption[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value?: SelectOption
  disabled?: boolean
  style?: React.CSSProperties
}

const Select = ({ options, onChange, value, disabled, style }: SelectProps) => {
  return (
    <select
      onChange={onChange}
      value={value?.value}
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
