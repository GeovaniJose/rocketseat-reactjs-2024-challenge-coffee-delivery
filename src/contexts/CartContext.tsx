import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Order, Product, cartReducer } from '../reducers/cart/reducer'
import {
  addProductAction,
  decrementProductQuantityAction,
  incrementProductQuantityAction,
  removeProductAction,
} from '../reducers/cart/actions'

interface CartContextType {
  cart: Product[]
  orders: Order[]
  addProduct: (product: Product) => void
  incrementProductQuantity: (productId: Product['id']) => void
  decrementProductQuantity: (productId: Product['id']) => void
  removeProduct: (productId: Product['id']) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const { cart, orders } = cartState

  function addProduct(product: Product) {
    dispatch(addProductAction(product))
  }

  function incrementProductQuantity(productId: Product['id']) {
    dispatch(incrementProductQuantityAction(productId))
  }

  function decrementProductQuantity(productId: Product['id']) {
    dispatch(decrementProductQuantityAction(productId))
  }

  function removeProduct(productId: Product['id']) {
    dispatch(removeProductAction(productId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addProduct,
        incrementProductQuantity,
        decrementProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
