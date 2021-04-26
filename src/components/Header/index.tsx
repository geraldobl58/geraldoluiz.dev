import { useState } from 'react'

import Burger from 'components/Burger'
import Navigation from 'components/Navigation'

import { HeaderWrapper, HeaderContent } from './styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <HeaderContent>
        <h1>GL</h1>
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
