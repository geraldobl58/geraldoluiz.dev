import styled from 'styled-components'

interface NavigationPropsStyled {
  menuOpen: boolean
}

export const StyledMenu = styled.nav<NavigationPropsStyled>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #333;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }

  transform: ${({ menuOpen }) =>
    menuOpen ? 'translateX(0%)' : 'translateX(100%)'};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      /* color: ${({ theme }) => theme.primaryHover}; */
    }
  }
`
