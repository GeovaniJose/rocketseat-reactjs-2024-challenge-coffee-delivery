import { createBrowserRouter } from 'react-router-dom'

import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { App } from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])
