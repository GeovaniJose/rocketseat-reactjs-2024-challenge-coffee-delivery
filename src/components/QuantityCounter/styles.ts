import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};

  > button {
    display: flex;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.colors.purple};

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }

  > span {
    width: 1.25rem;
    text-align: center;
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-title']};
  }
`
