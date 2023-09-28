import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

export interface componentWithRouterOptions {
  route?: string
}

export function componentRouter (component: ReactNode, options: componentWithRouterOptions) {
  const { route } = options
  return render(
      <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTests}>
              { component }
          </I18nextProvider>
      </MemoryRouter>
  )
}
