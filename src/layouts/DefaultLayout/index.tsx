import { Header } from '../../components/Header'

import { Home } from '../../pages/Home'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Home />
    </LayoutContainer>
  )
}
