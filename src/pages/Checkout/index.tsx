import { Fragment, useContext } from 'react'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'

import { Radio } from '../../components/Radio'
import { TextField } from '../../components/TextField'
import { QuantityCounter } from '../../components/QuantityCounter'
import { CartContext } from '../../contexts/CartContext'

import {
  Address,
  CartPreview,
  CartTotal,
  ConfirmButton,
  Container,
  Divider,
  FormContent,
  Heading,
  Payment,
  PaymentOptions,
  ProductInfo,
  ProductItem,
  Title,
} from './styles'

const shippingPrice = 3.5

export function Checkout() {
  const {
    cart,
    removeProduct,
    incrementProductQuantity,
    decrementProductQuantity,
  } = useContext(CartContext)

  const totalProductsPrice = cart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  function handleItemIncrement(itemId: string) {
    incrementProductQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementProductQuantity(itemId)
  }

  function handleItemRemove(productId: string) {
    removeProduct(productId)
  }

  return (
    <Container>
      <div>
        <Title>Complete seu pedido</Title>

        <FormContent>
          <Address>
            <Heading>
              <MapPinLine size={22} />

              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Heading>

            <form action="">
              <TextField
                placeholder="CEP"
                type="number"
                style={{ gridArea: 'cep' }}
              />

              <TextField placeholder="Rua" style={{ gridArea: 'street' }} />

              <TextField placeholder="Número" style={{ gridArea: 'number' }} />

              <TextField
                placeholder="Complemento"
                style={{ gridArea: 'fullAddress' }}
                optional
              />

              <TextField
                placeholder="Bairro"
                style={{ gridArea: 'neighborhood' }}
              />

              <TextField placeholder="Cidade" style={{ gridArea: 'city' }} />

              <TextField
                placeholder="UF"
                maxLength={2}
                style={{ gridArea: 'uf' }}
              />
            </form>
          </Address>

          <Payment>
            <Heading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Heading>

            <PaymentOptions>
              <Radio isSelected name="paymentMethod" value="credito">
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio isSelected={false} name="paymentMethod" value="debito">
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio isSelected={false} name="paymentMethod" value="dinheiro">
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </PaymentOptions>
          </Payment>
        </FormContent>
      </div>

      <div>
        <Title>Cafés selecionados</Title>

        <CartPreview>
          {cart.map((product) => (
            <Fragment key={product.id}>
              <ProductItem>
                <img src={product.imageSrc} alt="" />

                <ProductInfo>
                  <span>{product.title}</span>

                  <QuantityCounter
                    quantity={product.quantity}
                    incrementQuantity={() => handleItemIncrement(product.id)}
                    decrementQuantity={() => handleItemDecrement(product.id)}
                  />

                  <button onClick={() => handleItemRemove(product.id)}>
                    <Trash size={16} />
                    <span>Remover</span>
                  </button>
                </ProductInfo>

                <aside>
                  {(product.quantity * product.price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </aside>
              </ProductItem>

              <Divider />
            </Fragment>
          ))}

          <CartTotal>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalProductsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalProductsPrice + shippingPrice)}
              </strong>
            </div>
          </CartTotal>

          <ConfirmButton disabled={!cart.length}>
            Confirmar pedido
          </ConfirmButton>
        </CartPreview>
      </div>
    </Container>
  )
}
