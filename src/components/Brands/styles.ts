import styled from 'styled-components'

export const Wrapper = styled.section`
  margin: 100px 0;

  @media (max-width: 768px) {
    margin: 50px 0;
  }
`

export const Content = styled.div`
  padding: 20px 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  img {
    margin-right: 2rem;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    margin: 50px 0;
  }
`

export const Items = styled.div`
  margin-bottom: 100px;

  display: flex;
`

export const TitlePage = styled.h1`
  padding: 0px 40px;

  color: transparent;
  font-size: 120px;
  font-weight: 900;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #565656;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 56px;
  }
`
