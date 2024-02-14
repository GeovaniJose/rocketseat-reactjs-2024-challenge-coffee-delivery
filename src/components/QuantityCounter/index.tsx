import { Minus, Plus } from '@phosphor-icons/react'

import { Container } from './styles'

type QuantityCounterProps = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityCounter({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityCounterProps) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus weight="bold" size={14} />
      </button>
    </Container>
  )
}
