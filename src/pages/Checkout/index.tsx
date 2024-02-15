import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import {
  Address,
  CartPreview,
  Container,
  FormContent,
  Heading,
  Payment,
  PaymentOptions,
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
              <input
                placeholder="CEP"
                type="number"
                style={{ gridArea: 'cep' }}
              />

              <input placeholder="Rua" style={{ gridArea: 'street' }} />

              <input placeholder="Número" style={{ gridArea: 'number' }} />

              <input
                placeholder="Complemento"
                style={{ gridArea: 'fullAddress' }}
              />

              <input
                placeholder="Bairro"
                style={{ gridArea: 'neighborhood' }}
              />

              <input placeholder="Cidade" style={{ gridArea: 'city' }} />

              <input
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
              <label htmlFor="credito" data-state={true}>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="credito"
                  value="credito"
                />
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </label>

              <label htmlFor="debito">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="debito"
                  value="debito"
                />
                <Bank size={16} />
                <span>Cartão de débito</span>
              </label>

              <label htmlFor="dinheiro">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="dinheiro"
                  value="dinheiro"
                />
                <Money size={16} />
                <span>Dinheiro</span>
              </label>
            </PaymentOptions>
          </Payment>
        </FormContent>
      </div>

      <div>
        <Title>Cafés selecionados</Title>

        <CartPreview>Confirmar pedido</CartPreview>
      </div>
    </Container>
  )
}
