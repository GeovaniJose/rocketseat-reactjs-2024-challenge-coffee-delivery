import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import heroImg from '../../assets/hero.svg'

import { Heading, Hero, HeroContent, Info } from './styles'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <Hero>
        <HeroContent>
          <Heading>
            <h1>
              Encontre o café perfeito
              <br />
              para qualquer hora do dia
            </h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              <br />
              qualquer hora
            </h2>
          </Heading>

          <Info>
            <div>
              <ShoppingCart
                weight="fill"
                size={16}
                style={{ background: theme.colors['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Package
                weight="fill"
                size={16}
                style={{ background: theme.colors['base-text'] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                weight="fill"
                size={16}
                style={{ background: theme.colors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                weight="fill"
                size={16}
                style={{ background: theme.colors.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </Info>
        </HeroContent>

        <img
          src={heroImg}
          alt="Copo de café descartável com alguns grãos de café em volta"
        />
      </Hero>
    </div>
  )
}
