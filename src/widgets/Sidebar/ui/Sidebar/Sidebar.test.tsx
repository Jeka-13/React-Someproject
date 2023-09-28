import { screen, fireEvent } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { componentRouter } from 'shared/lib/tests/componentRouter/componentRouter'

describe('Sidebar', () => {
  test('Sidebar render', () => {
    componentRouter(<Sidebar/>, { route: '/' })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    componentRouter(<Sidebar/>, { route: '/' })
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
