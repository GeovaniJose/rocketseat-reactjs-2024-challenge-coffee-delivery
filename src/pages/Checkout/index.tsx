import { Fragment, useContext } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

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
  PaymentErrorMessage,
  PaymentOptions,
  ProductInfo,
  ProductItem,
  Title,
} from './styles'

type FormValues = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: 'credito' | 'debito' | 'dinheiro'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credito', 'debito', 'dinheiro'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Checkout() {
  const {
    cart,
    removeProduct,
    incrementProductQuantity,
    decrementProductQuantity,
    checkout,
  } = useContext(CartContext)

  const totalProductsPrice = cart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: string) {
    incrementProductQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementProductQuantity(itemId)
  }

  function handleItemRemove(productId: string) {
    removeProduct(productId)
  }

  const handleOrderCheckout: SubmitHandler<FormValues> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
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

            <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
              <TextField
                placeholder="CEP"
                type="number"
                style={{ gridArea: 'cep' }}
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextField
                placeholder="Rua"
                style={{ gridArea: 'street' }}
                error={errors.street}
                {...register('street')}
              />

              <TextField
                placeholder="Número"
                style={{ gridArea: 'number' }}
                error={errors.number}
                {...register('number')}
              />

              <TextField
                placeholder="Complemento"
                style={{ gridArea: 'fullAddress' }}
                optional
                error={errors.fullAddress}
                {...register('fullAddress')}
              />

              <TextField
                placeholder="Bairro"
                style={{ gridArea: 'neighborhood' }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />

              <TextField
                placeholder="Cidade"
                style={{ gridArea: 'city' }}
                error={errors.city}
                {...register('city')}
              />

              <TextField
                placeholder="UF"
                maxLength={2}
                style={{ gridArea: 'uf' }}
                error={errors.uf}
                {...register('uf')}
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
              <Radio
                value="credito"
                isSelected={selectedPaymentMethod === 'credito'}
                {...register('paymentMethod')}
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio
                value="debito"
                isSelected={selectedPaymentMethod === 'debito'}
                {...register('paymentMethod')}
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                value="dinheiro"
                isSelected={selectedPaymentMethod === 'dinheiro'}
                {...register('paymentMethod')}
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </PaymentOptions>

            {errors.paymentMethod ? (
              <PaymentErrorMessage role="alert">
                {errors.paymentMethod.message}
              </PaymentErrorMessage>
            ) : null}
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

          <ConfirmButton type="submit" form="order" disabled={!cart.length}>
            Confirmar pedido
          </ConfirmButton>
        </CartPreview>
      </div>
    </Container>
  )
}
