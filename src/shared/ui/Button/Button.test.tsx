import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button', () => {
  test('Button render', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Button render with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
    screen.debug()
  })
})
