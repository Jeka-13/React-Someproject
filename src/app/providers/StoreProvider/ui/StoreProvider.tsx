import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoreProvider'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

interface StoryProviderProps {
  children?: ReactNode
  initialState?: StateSchema
}

export const StoreProvider = (props: StoryProviderProps) => {
  const {
    children,
    initialState
  } = props

  const store = createReduxStore(initialState)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}
