import { NavigateFunction } from 'react-router-dom'

import { OrderInfo } from '../../pages/Checkout'
import { Product } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  INCREMENT_PRODUCT_QUANTITY = 'INCREMENT_PRODUCT_QUANTITY',
  DECREMENT_PRODUCT_QUANTITY = 'DECREMENT_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_PRODUCT
      payload: {
        product: Product
      }
    }
  | {
      type:
        | ActionTypes.INCREMENT_PRODUCT_QUANTITY
        | ActionTypes.DECREMENT_PRODUCT_QUANTITY
        | ActionTypes.REMOVE_PRODUCT
      payload: {
        productId: Product['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NavigateFunction
      }
    }

export function addProductAction(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product,
    },
  } satisfies Actions
}

export function incrementProductQuantityAction(productId: Product['id']) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  } satisfies Actions
}

export function decrementProductQuantityAction(productId: Product['id']) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  } satisfies Actions
}

export function removeProductAction(productId: Product['id']) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  } satisfies Actions
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}
