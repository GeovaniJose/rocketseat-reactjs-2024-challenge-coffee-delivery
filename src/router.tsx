import { createBrowserRouter } from 'react-router-dom'

import { App } from './App'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

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
      {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ],
  },
])
