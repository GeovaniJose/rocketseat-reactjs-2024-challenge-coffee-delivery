import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.label`
  flex: 1;
  padding: 1rem;
  border-radius: 6px;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors['base-button']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
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
`
