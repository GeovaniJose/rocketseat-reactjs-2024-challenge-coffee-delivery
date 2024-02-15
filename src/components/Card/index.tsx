import { useContext, useEffect, useState } from 'react'
import { Check, ShoppingCartSimple } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'
import { Product } from '../../reducers/cart/reducer'
import { QuantityCounter } from '../QuantityCounter'

import {
  CoffeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles'

interface CardProps {
  coffee: Omit<Product, 'quantity'>
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  const { addProduct } = useContext(CartContext)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addProduct({ ...coffee, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 700)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <Container>
      <CoffeImg src={coffee.imageSrc} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$&nbsp;</span>
          <span>
            {coffee.price.toLocaleString('pt-BR', {
              style: 'decimal',
              minimumFractionDigits: 2,
            })}
          </span>
        </Price>

        <Order>
          <QuantityCounter
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button onClick={handleAddItem}>
            {isItemAdded ? (
              <Check size={22} />
            ) : (
              <ShoppingCartSimple weight="fill" size={22} />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  )
}
