import styled from 'styled-components'

export const HeaderWrapper = styled.header``

export const HeaderContent = styled.div`


  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.1;
  }

  ul {
    display: flex;
    align-items: center;

    list-style: none;

    li {
      margin: 0 0px 0 30px;
      display: inline-block;
      a {
        color: #fff;
        text-decoration: none;
        font-family: montserrat;
        font-weight: 600;
        position: relative;
        overflow: hidden;
        display: inline-block;
        text-transform: uppercase;

        transition: filter 0.3s

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`
