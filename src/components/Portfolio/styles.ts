import styled from 'styled-components'

export const PortfolioWrapper = styled.section`
  width: 100%;
  padding: 20px 0;
`

export const PortfolioContent = styled.div`
  max-width: 1400px;
  margin: 100px auto;
  padding: 20px 40px;

  position: relative;

  color: var(--white);

  -webkit-user-select: none;

  > h3 {
    position: absolute;
    left: 3rem;
    top: 0;
    font-family: montserrat;
    color: transparent;
    font-size: 150px;
    font-weight: 900;
    opacity: 0.1;
    line-height: 0;
    text-transform: uppercase;

    -webkit-text-stroke: 1px var(--white);
  }

  > span {
    position: absolute;
    top: -1rem;

    text-transform: uppercase;
    font-weight: 900;
    font-size: 35px;
  }
`
