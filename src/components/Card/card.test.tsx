import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import Card from './'
import styles from './styles.module.css'

describe('Card', () => {
  it('should render with title prop', () => {
    render(<Card title="Card Title" />)
    const titleElement = screen.getByText(/card title/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render content prop', () => {
    render(<Card content="Card Content" />)
    const contentElement = screen.getByText(/card content/i)
    expect(contentElement).toBeInTheDocument()
  })

  it('should render children when content prop is not provided', () => {
    render(
      <Card>
        <span>Child Content</span>
      </Card>
    )
    const contentElement = screen.getByText(/child content/i)
    expect(contentElement).toBeInTheDocument()
  })

  it('should apply the correct class for the card', () => {
    render(<Card title="Card Title" />)
    const cardElement = screen.getByRole('region')
    expect(cardElement).toHaveClass(styles.r_card)
  })

  it('should append additional className if provided', () => {
    render(<Card title="Card Title" className="extra-class" />)
    const cardElement = screen.getByRole('region')
    expect(cardElement).toHaveClass('extra-class')
  })
})
