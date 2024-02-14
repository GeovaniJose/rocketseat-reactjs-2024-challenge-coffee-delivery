import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './contexts/CartContext'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { router } from './router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
