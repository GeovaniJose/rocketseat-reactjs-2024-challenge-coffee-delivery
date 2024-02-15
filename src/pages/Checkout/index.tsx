import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import { Radio } from '../../components/Radio'
import { TextField } from '../../components/TextField'

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

        <CartPreview>Confirmar pedido</CartPreview>
      </div>
    </Container>
  )
}
