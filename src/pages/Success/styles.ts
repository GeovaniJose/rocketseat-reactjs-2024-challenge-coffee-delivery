import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Message = styled.div`
  > h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  > h2 {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`

export const OrderInfo = styled.main`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  background: ${(props) => `linear-gradient(
        ${props.theme.colors.background},
        ${props.theme.colors.background}
      )
      padding-box`},
    ${(props) => `linear-gradient(
        to right,
        ${props.theme.colors.yellow},
        ${props.theme.colors.purple}
      )
      border-box`};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > section {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`
