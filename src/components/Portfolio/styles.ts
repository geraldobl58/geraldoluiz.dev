import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0px auto;
  padding: 20px 40px;
`

export const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 400px) {
    display: block;
  }
`

export const Title = styled.h1`
  color: var(--white);
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 50px;

  @media (max-width: 400px) {
    font-size: 16px;
    font-weight: 100;
  }
`
