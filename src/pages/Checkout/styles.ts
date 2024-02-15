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

    > input {
      height: 2.625rem;
      padding: 0.75rem;
      border-radius: 4px;
      background: ${(props) => props.theme.colors['base-input']};
      border: 1px solid ${(props) => props.theme.colors['base-button']};
      color: 1px solid ${(props) => props.theme.colors['base-text']};
      ${mixins.fonts.textS}

      &:focus {
        box-shadow: none;
        outline: none;
        border-color: ${(props) => props.theme.colors['yellow-dark']};
      }

      &::placeholder {
        color: 1px solid ${(props) => props.theme.colors['base-label']};
      }
    }
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
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    text-transform: uppercase;
    background: ${(props) => props.theme.colors['base-button']};
    ${mixins.fonts.buttonS}

    display: flex;
    align-items: center;
    gap: 0.75rem;

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors['base-subtitle']};
      background: ${(props) => props.theme.colors['base-hover']};
    }

    &[data-state='true'] {
      border-color: ${({ theme }) => theme.colors.purple};
      background-color: ${({ theme }) => theme.colors['purple-light']};
    }

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`

export const CartPreview = styled.div`
  flex: 1;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};
`
