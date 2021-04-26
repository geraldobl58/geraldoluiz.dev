import { StyledBurger } from './styles'

interface BurgerProps {
  menuOpen: boolean
  setMenuOpen: (menuOpen: boolean) => void
}

const Burger = ({ menuOpen, setMenuOpen }: BurgerProps) => (
  <StyledBurger menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
    <div />
    <div />
    <div />
  </StyledBurger>
)

export default Burger
