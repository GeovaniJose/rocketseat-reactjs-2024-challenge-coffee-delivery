import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { Aside, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Copo de café com um foguete desenhado"
        />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>0</span>
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
