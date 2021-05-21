import { useState } from 'react'

import * as S from './styles'

import Burger from 'components/Burger'
import Navigation from 'components/Navigation'

import Logo from 'components/Logo'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Content>
        <Logo />
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
