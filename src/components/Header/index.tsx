import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'

import { HeaderWrapper, HeaderContent } from './styles'

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Logo />
      <Navigation />
    </HeaderContent>
  </HeaderWrapper>
)

export default Header
