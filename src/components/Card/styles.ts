import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
`

export const CoffeImg = styled.img`
  margin-top: calc(0px - 1.5rem - 1.25rem);
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > span {
    ${mixins.fonts.tag}
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    color: ${(props) => props.theme.colors['yellow-dark']};
    background: ${(props) => props.theme.colors['yellow-light']};
  }
`

export const Title = styled.strong`
  ${mixins.fonts.titleS}
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const Description = styled.p`
  ${mixins.fonts.textS}
  color: ${(props) => props.theme.colors['base-label']};
  text-align: center;
`

export const Control = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
`

export const Price = styled.div`
  color: ${(props) => props.theme.colors['base-text']};

  > span:first-child {
    ${mixins.fonts.textS}
  }

  > span:last-child {
    ${mixins.fonts.titleM}
  }
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['purple-dark']};
    color: ${(props) => props.theme.colors['base-card']};

    &:hover {
      background: ${(props) => props.theme.colors.purple};
    }
  }
`
