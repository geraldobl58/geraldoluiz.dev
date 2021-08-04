import { StyledMenu } from './styles'

interface NavigationProps {
  menuOpen: boolean
  setMenuOpen: (menuOpen: boolean) => void
}

const Menu = ({ menuOpen }: NavigationProps) => {
  return (
    <StyledMenu menuOpen={menuOpen}>
      <a href="/">Home</a>
      <a href="/">Sobre</a>
      <a href="/">Blog</a>
      <a href="/">Contato</a>
    </StyledMenu>
  )
}
export default Menu
