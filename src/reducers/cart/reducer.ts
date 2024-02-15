import { produce } from 'immer'

import { OrderInfo } from '../../pages/Checkout'
import { ActionTypes, Actions } from './actions'

interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  imageSrc: string
}

export interface Product extends Coffee {
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  products: Product[]
}

interface CartState {
  cart: Product[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        const productAlreadyAdded = draft.cart.find(
          (product) => product.id === action.payload.product.id,
        )

        if (productAlreadyAdded) {
          productAlreadyAdded.quantity += action.payload.product.quantity
        } else {
          draft.cart.push(action.payload.product)
        }
      })

    case ActionTypes.INCREMENT_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const productToIncrement = draft.cart.find(
          (product) => product.id === action.payload.productId,
        )

        if (productToIncrement?.id) {
          productToIncrement.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const productToDecrement = draft.cart.find(
          (product) => product.id === action.payload.productId,
        )

        if (productToDecrement?.id && productToDecrement.quantity > 1) {
          productToDecrement.quantity -= 1
        }
      })

    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        const productToRemoveId = draft.cart.findIndex(
          (product) => product.id === action.payload.productId,
        )
        draft.cart.splice(productToRemoveId, 1)
      })

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          products: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })

    default:
      return state
  }
}
