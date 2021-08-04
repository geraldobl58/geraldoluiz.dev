import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0px auto;
  padding: 20px 40px;

  a {
    color: var(--white);
    text-decoration: none;
  }
`

export const Title = styled.h1`
  color: var(--white);
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Georama', sans-serif;
  margin-bottom: 50px;

  @media (max-width: 400px) {
    font-size: 16px;
    font-weight: 100;
  }
`

export const Column = styled.div`
  border-top: 1px solid var(--gray);

  &:last-child {
    border-bottom: 1px solid var(--gray);
  }

  padding: 20px 0;

  @media (max-width: 400px) {
    display: block;
  }
`

export const Coding = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    margin-left: 10px;
  }
`

export const TitlePortfolio = styled.div`
  font-size: 36px;
  font-weight: 900;
`

export const PortfolioItem = styled.div``

export const Description = styled.div`
  font-size: 14px;
  font-weight: 300;
`

export const Tags = styled.div`
  font-size: 10px;
  font-weight: 200;
  text-transform: uppercase;

  span {
    font-weight: 900;
  }
`
