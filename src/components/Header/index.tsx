import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { Aside, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoCoffeeDelivery}
        alt="Copo de café com um foguete desenhado"
      />

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <a href="/">
          <ShoppingCart size={22} weight="fill" />
          <span>0</span>
        </a>
      </Aside>
    </HeaderContainer>
  )
}
