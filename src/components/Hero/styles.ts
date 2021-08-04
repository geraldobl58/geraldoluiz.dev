import styled from 'styled-components'

export const Wrapper = styled.section`
  margin: 100px auto;
  padding: 20px 40px;

  @media (max-width: 400px) {
    margin: 0 auto;
  }
`

export const Content = styled.div`
  line-height: 1.1;

  h1 {
    color: transparent;
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    -webkit-text-stroke: 1px var(--white);
    font-family: 'Georama', sans-serif;
  }

  h2 {
    color: var(--white);
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    font-family: 'Georama', sans-serif;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 28px;
    }
  }
`
