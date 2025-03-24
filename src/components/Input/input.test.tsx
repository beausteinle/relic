// Input.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import Input from './'
import styles from './styles.module.css'

describe('Input component', () => {
  it('renders with placeholder text', () => {
    render(<Input onChange={() => {}} placeholder="Enter text" />)
    const inputElement = screen.getByPlaceholderText(/enter text/i)
    expect(inputElement).toBeInTheDocument()
  })

  it('displays the correct value', () => {
    render(<Input onChange={() => {}} value="Test value" />)
    const inputElement = screen.getByDisplayValue('Test value')
    expect(inputElement).toBeInTheDocument()
  })

  it('calls onChange handler when value changes', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} placeholder="Type here" />)
    const inputElement = screen.getByPlaceholderText(/type here/i)
    fireEvent.change(inputElement, { target: { value: 'New value' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('applies correct size class for small size', () => {
    render(<Input onChange={() => {}} size="small" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass(styles.input_sm)
  })

  it('applies correct size class for medium size (default)', () => {
    render(<Input onChange={() => {}} size="medium" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass(styles.input_md)
  })

  it('applies correct size class for large size', () => {
    render(<Input onChange={() => {}} size="large" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass(styles.input_lg)
  })

  it('appends additional custom className if provided', () => {
    render(<Input onChange={() => {}} className="extra-class" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass('extra-class')
  })

  it('applies custom inline style when provided', () => {
    const customStyle = { maxWidth: '500px' }
    render(<Input onChange={() => {}} style={customStyle} />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveStyle('max-width: 500px')
  })

  it('is disabled when the disabled prop is true', () => {
    render(<Input onChange={() => {}} disabled placeholder="Disabled input" />)
    const inputElement = screen.getByPlaceholderText(/disabled input/i)
    expect(inputElement).toBeDisabled()
  })
})
