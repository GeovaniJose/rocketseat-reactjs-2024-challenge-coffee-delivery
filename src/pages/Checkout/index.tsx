import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'

import tradicionalImg from '../../assets/coffees/expresso.png'
import { Radio } from '../../components/Radio'
import { TextField } from '../../components/TextField'
import { QuantityCounter } from '../../components/QuantityCounter'

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

export function Checkout() {
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
          <ProductItem>
            <img src={tradicionalImg} alt="" />

            <ProductInfo>
              <span>Expresso Tradicional</span>

              <QuantityCounter
                quantity={1}
                incrementQuantity={() => null}
                decrementQuantity={() => null}
              />

              <button>
                <Trash size={16} />
                <span>Remover</span>
              </button>
            </ProductInfo>

            <aside>R$ 9,90</aside>
          </ProductItem>

          <Divider />

          <ProductItem>
            <img src={tradicionalImg} alt="" />

            <ProductInfo>
              <span>Expresso Tradicional</span>

              <QuantityCounter
                quantity={1}
                incrementQuantity={() => null}
                decrementQuantity={() => null}
              />

              <button>
                <Trash size={16} />
                <span>Remover</span>
              </button>
            </ProductInfo>

            <aside>R$ 9,90</aside>
          </ProductItem>

          <Divider />

          <CartTotal>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </CartTotal>

          <ConfirmButton>Confirmar pedido</ConfirmButton>
        </CartPreview>
      </div>
    </Container>
  )
}
