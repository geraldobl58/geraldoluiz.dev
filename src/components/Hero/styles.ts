import styled from 'styled-components'

export const HeroWrapper = styled.section`
  margin: 100px auto;
  padding: 20px 40px;
`

export const HeroContent = styled.div`
  line-height: 1.1;

  h1 {
    color: transparent;
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    -webkit-text-stroke: 1px var(--white);
    font-family: 'Montserrat', sans-serif;
  }

  h2 {
    color: var(--white);
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 48px;
    }
  }
`
