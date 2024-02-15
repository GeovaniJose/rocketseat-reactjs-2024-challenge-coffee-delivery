import { Product } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  INCREMENT_PRODUCT_QUANTITY = 'INCREMENT_PRODUCT_QUANTITY',
  DECREMENT_PRODUCT_QUANTITY = 'DECREMENT_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
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
