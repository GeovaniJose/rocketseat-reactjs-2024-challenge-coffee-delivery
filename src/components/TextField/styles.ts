import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};
  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors['base-button']};
  }

  > input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0.75rem;
    background: transparent;
    color: ${(props) => props.theme.colors['base-text']};

    &::placeholder {
      ${mixins.fonts.textS}
      color: 1px solid ${(props) => props.theme.colors['base-label']};
    }
  }

  > span {
    font-style: italic;
    padding-right: 12px;
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
