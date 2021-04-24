import styled from 'styled-components'

export const PortfolioItemsWrapper = styled.section`
  display: flex;
  align-items: center;
`

export const PortfolioItemsContent = styled.div`
  display: flex;
  margin: 10rem 0;

  @media (max-width: 760px) {
    display: flex;

    flex-direction: column;
  }
`

export const PortfolioItem = styled.div`
  margin-right: 2rem;
`
