import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 0;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors['base-title']};
  }

  > h3 {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const Info = styled.div`
  display: grid;
  grid: auto / auto auto;
  gap: 1.25rem 2.5rem;
  margin-bottom: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      box-sizing: content-box;
      background-color: orange;
      padding: 0.5rem;
      border-radius: 50%;
      color: ${(props) => props.theme.colors.background};
    }
  }
`

export const CoffeList = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding: 2rem 0;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
  }
`
