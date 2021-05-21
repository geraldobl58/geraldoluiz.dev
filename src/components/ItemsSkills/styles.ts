import styled from 'styled-components'

export const Wrapper = styled.section``

export const Content = styled.div`
  padding: 20px 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  svg {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
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
    font-size: 36px;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: 16px;
`

export const ContentFeatured = styled.div``
