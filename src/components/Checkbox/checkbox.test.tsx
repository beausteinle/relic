import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import Checkbox from './index'

describe('Checkbox', () => {
  it('should render with label', () => {
    render(<Checkbox onChange={() => {}} label="Accept Terms and Conditions" />)
    const labelElement = screen.getByText(/accept terms and conditions/i)
    expect(labelElement).toBeInTheDocument()
  })

  it('should call onChange handler with correct value when clicked', () => {
    const handleChange = vi.fn()
    render(
      <Checkbox onChange={handleChange} label="Accept Terms and Conditions" />
    )
    const checkboxElement = screen.getByLabelText(
      /accept terms and conditions/i
    )
    fireEvent.click(checkboxElement)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange.mock.calls[0][0].target.checked).toBe(true)
    fireEvent.click(checkboxElement)
    expect(handleChange).toHaveBeenCalledTimes(2)
    expect(handleChange.mock.calls[1][0].target.checked).toBe(false)
  })

  it('should be disabled when disabled prop is true', () => {
    render(
      <Checkbox
        onChange={() => {}}
        label="Accept Terms and Conditions"
        disabled
      />
    )
    const checkboxElement = screen.getByLabelText(
      /accept terms and conditions/i
    )
    expect(checkboxElement).toBeDisabled()
  })

  it('should render children when passed', () => {
    render(
      <Checkbox onChange={() => {}}>
        <span>Child Element</span>
      </Checkbox>
    )
    const childElement = screen.getByText(/child element/i)
    expect(childElement).toBeInTheDocument()
  })
})
