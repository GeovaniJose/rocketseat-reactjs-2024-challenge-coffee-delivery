import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.background};
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['purple-light']};

    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    span {
      ${mixins.fonts.textS};
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['yellow-light']};

    svg {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }

    position: relative;

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
