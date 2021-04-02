import styled from 'styled-components'

export const HeroWrapper = styled.section`
  max-width: 1400px;
  margin: 100px auto;
  padding: 20px 40px;

  display: flex;
  justify-content: space-between;
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

  p {
    font-family: montserrat;
    font-weight: 600;
    display: inline-block;
    padding-top: 10px;
  }
`

export const HeroTyped = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 20px;
    text-transform: uppercase;
    font-weight: 100;
    font-size: 36px;
  }

  span {
    font-size: 32px;
    font-weight: 100;
  }
`
