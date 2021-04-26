import styled from 'styled-components'

interface NavigationPropsStyled {
  menuOpen: boolean
}

export const StyledMenu = styled.nav<NavigationPropsStyled>`
  display: flex;
  flex-direction: column;
  background: var(--backgroundGray-100);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  transform: ${({ menuOpen }) =>
    menuOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  a {
    font-size: 36px;
    font-weight: 900;
    color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;
    -webkit-text-stroke: 1px var(--white);
    font-family: 'Montserrat', sans-serif;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.5);
      color: var(--white);
    }
  }
`
