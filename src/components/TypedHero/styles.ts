import styled from 'styled-components'

export const HeroTyped = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 100;
    font-size: 36px;
    text-transform: uppercase;
  }

  @media (max-width: 400px) {
    display: block;

    h3 {
      font-size: 18px;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    span {
      font-size: 18px;
    }
  }
`
