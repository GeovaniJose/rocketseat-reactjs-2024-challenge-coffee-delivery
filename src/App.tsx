import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './contexts/CartContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <DefaultLayout />
      </CartContextProvider>
    </ThemeProvider>
  )
}
