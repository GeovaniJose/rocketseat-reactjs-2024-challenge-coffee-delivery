import { ReactNode, createContext, useState } from 'react'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  imageSrc: string
}

interface Product extends Coffee {
  quantity: number
}

interface CartContextType {
  products: Product[]
  addProductToCart: (coffee: Coffee, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  console.log('🚀  products', products)

  function addProductToCart(coffee: Coffee, quantity: number) {
    const hasProduct = products.find((product) => product.id === coffee.id)

    if (hasProduct) {
      setProducts((state) =>
        state.map((product) => {
          if (product.id === coffee.id) {
            return {
              ...product,
              quantity: product.quantity + quantity,
            }
          } else {
            return product
          }
        }),
      )
    } else {
      setProducts((state) => [...state, { ...coffee, quantity }])
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
