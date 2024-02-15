import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  > div:first-child {
    flex: 1;
  }
`

export const Title = styled.h2`
  margin-bottom: 1rem;
  ${mixins.fonts.titleXS}
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Address = styled.div`
  flex: 1;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-card']};

  > div > svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > form {
    display: grid;
    grid-template-areas:
      'cep . .'
      'street street street'
      'number fullAddress fullAddress'
      'neighborhood city uf';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;
  }
`

export const Payment = styled.div`
  flex: 1;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-card']};

  > div > svg {
    color: ${(props) => props.theme.colors.purple};
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    > span {
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    > p {
      ${mixins.fonts.textS}
    }
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  > label {
  }
`

export const CartPreview = styled.div`
  flex: 1;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};
`
