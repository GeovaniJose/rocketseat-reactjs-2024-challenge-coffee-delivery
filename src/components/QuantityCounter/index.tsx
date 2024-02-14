import { Minus, Plus } from '@phosphor-icons/react'

import { Container } from './styles'

export function QuantityCounter() {
  return (
    <Container>
      <button>
        <Minus weight="bold" size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus weight="bold" size={14} />
      </button>
    </Container>
  )
}
