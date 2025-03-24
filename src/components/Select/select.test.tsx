// Select.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import Select from './'

describe('Select component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', disabled: true },
    { value: '3', label: 'Option 3', selected: true },
  ]

  it('renders all provided options', () => {
    render(<Select options={options} onChange={() => {}} />)
    options.forEach((option) => {
      const optionElement = screen.getByRole('option', { name: option.label })
      expect(optionElement).toBeInTheDocument()
      if (option.disabled) {
        expect(optionElement).toBeDisabled()
      }
    })
  })

  it('calls onChange handler when selection changes', () => {
    const handleChange = vi.fn()
    const localOptions = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]
    render(
      <Select
        options={localOptions}
        onChange={handleChange}
        value={localOptions[0]}
      />
    )
    const selectElement = screen.getByRole('combobox')
    // Change selection to Option 2
    fireEvent.change(selectElement, { target: { value: '2' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('is disabled when the disabled prop is true', () => {
    render(<Select options={options} onChange={() => {}} disabled />)
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeDisabled()
  })

  it('applies custom inline style when provided', () => {
    const customStyle = { width: '300px' }
    render(<Select options={options} onChange={() => {}} style={customStyle} />)
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toHaveStyle('width: 300px')
  })

  it('displays the correct value based on the value prop', () => {
    const localOptions = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]
    render(
      <Select
        options={localOptions}
        onChange={() => {}}
        value={localOptions[1]}
      />
    )
    const selectElement = screen.getByRole('combobox')
    expect(selectElement.value).toBe('2')
  })
})
