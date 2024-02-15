import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import deliveryImg from '../../assets/delivery.svg'
import { CartContext } from '../../contexts/CartContext'

import { Container, Content, Message, OrderInfo } from './styles'

export function Success() {
  const theme = useTheme()
  const { orders } = useContext(CartContext)
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    credito: 'Cartão de crédito',
    debito: 'Cartão de débito',
    dinheiro: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <Message>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </Message>

      <Content>
        <OrderInfo>
          <section>
            <MapPin
              weight="fill"
              size={32}
              color={theme.colors.white}
              style={{ background: theme.colors.purple }}
            />

            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {orderInfo.street}, {orderInfo.number}
                </strong>
              </span>
              <span>
                {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.uf}
              </span>
            </div>
          </section>

          <section>
            <Timer
              weight="fill"
              size={32}
              color={theme.colors.white}
              style={{ background: theme.colors.yellow }}
            />

            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </section>

          <section>
            <CurrencyDollar
              weight="bold"
              size={32}
              color={theme.colors.white}
              style={{ background: theme.colors['yellow-dark'] }}
            />

            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
            </div>
          </section>
        </OrderInfo>

        <img
          src={deliveryImg}
          alt="Ilustração de homem pilotando mobilete com pacote na bagagem"
        />
      </Content>
    </Container>
  )
}
