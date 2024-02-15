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

export const PaymentErrorMessage = styled.p`
  margin-top: -1rem;
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`

export const CartPreview = styled.div`
  flex: 1;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > img {
    width: 4.25rem;
  }

  > aside {
    font-weight: bold;
    align-self: start;
  }
`

export const ProductInfo = styled.div`
  max-width: 12rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  > span {
    width: 100%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['base-text']};
    background: ${(props) => props.theme.colors['base-button']};
    ${mixins.fonts.buttonS}

    &:hover {
      color: ${(props) => props.theme.colors['base-subtitle']};
      background: ${(props) => props.theme.colors['base-hover']};
    }

    > svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`

export const Divider = styled.span`
  border: 1px solid ${(props) => props.theme.colors['base-button']};
`

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-text']};

    > span:last-child {
      ${mixins.fonts.textM}
    }

    > strong {
      ${mixins.fonts.textL}
      font-weight: bold;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }
`

export const ConfirmButton = styled.button`
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;
  ${mixins.fonts.buttonG}
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.yellow};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.colors['yellow-light']};
  }
`
