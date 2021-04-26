import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  margin: 0px auto;
  padding: 20px 40px;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.1;
  }

  ul {
    /* display: flex; */

    list-style: none;

    li {
      margin: 0 0px 0 30px;
      display: inline-block;

      display: flex;
      align-items: center;

      a {
        color: #fff;
        text-decoration: none;
        font-family: montserrat;
        font-weight: 600;
        position: relative;
        overflow: hidden;
        display: inline-block;
        text-transform: uppercase;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.5);
        }
      }
    }
  }
`
