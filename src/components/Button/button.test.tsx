// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import Button from './'
import styles from './styles.module.css'

describe('Button', () => {
  it('should render with text prop', () => {
    render(<Button onClick={() => {}} text="Click Me" />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render children when text prop is not provided', () => {
    render(
      <Button onClick={() => {}}>
        <span>Child Content</span>
      </Button>
    )
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent(/child content/i)
  })

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} text="Click Me" />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Button onClick={() => {}} text="Click Me" disabled />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeDisabled()
  })

  it('should apply the correct class for small size', () => {
    render(<Button onClick={() => {}} text="Click Me" size="small" />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toHaveClass(styles.button_sm)
  })

  it('should apply the correct class for medium size (default)', () => {
    render(<Button onClick={() => {}} text="Click Me" size="medium" />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toHaveClass(styles.button_md)
  })

  it('should apply the correct class for large size', () => {
    render(<Button onClick={() => {}} text="Click Me" size="large" />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toHaveClass(styles.button_lg)
  })

  it('should append additional className if provided', () => {
    render(
      <Button onClick={() => {}} text="Click Me" className="extra-class" />
    )
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toHaveClass('extra-class')
  })
})
