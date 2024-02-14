import { ShoppingCartSimple } from '@phosphor-icons/react'

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

interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  imageSrc: string
}

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
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
          <QuantityCounter />

          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
