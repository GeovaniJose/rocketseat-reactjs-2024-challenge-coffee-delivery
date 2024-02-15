import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { CartContext } from '../../contexts/CartContext'

import { Aside, HeaderContainer } from './styles'

export function Header() {
  const { cart } = useContext(CartContext)

  const productsAmount = cart.reduce(
    (acc, product) => acc + product.quantity,
    0,
  )

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
          {productsAmount ? <span>{productsAmount}</span> : null}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
