// checkbox.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './index'

describe('Checkbox Component', () => {
  test('renders with label when label prop is provided', () => {
    const handleChange = jest.fn()
    render(<Checkbox onChange={handleChange} label="Accept Terms" />)

    // Check that the label text is rendered
    const labelElement = screen.getByText('Accept Terms')
    expect(labelElement).toBeInTheDocument()

    // Check that the checkbox input exists
    const inputElement = screen.getByRole('checkbox')
    expect(inputElement).toBeInTheDocument()

    // Ensure that the label is associated with the checkbox input
    // (label's htmlFor should equal the input's name attribute)
    expect(labelElement).toHaveAttribute(
      'for',
      inputElement.getAttribute('name')
    )
  })

  test('renders children when children prop is provided', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox onChange={handleChange}>
        <span>Child Label</span>
      </Checkbox>
    )

    // Check that the children are rendered as label content
    const childElement = screen.getByText('Child Label')
    expect(childElement).toBeInTheDocument()
  })

  test('is disabled when disabled prop is true', () => {
    const handleChange = jest.fn()
    render(<Checkbox onChange={handleChange} disabled />)

    const inputElement = screen.getByRole('checkbox')
    expect(inputElement).toBeDisabled()
  })

  test('calls onChange handler when checkbox is clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox onChange={handleChange} label="Test Checkbox" />)

    const inputElement = screen.getByRole('checkbox')
    fireEvent.click(inputElement)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('applies defaultChecked prop correctly', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox
        onChange={handleChange}
        label="Default Checked"
        defaultChecked
      />
    )

    const inputElement = screen.getByRole('checkbox') as HTMLInputElement
    expect(inputElement.checked).toBe(true)
  })
})
