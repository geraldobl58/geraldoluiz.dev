import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  margin: 0px auto;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: var(--backgroundGray-100);
  align-items: center;
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
    list-style: none;

    li {
      margin: 0 0px 0 30px;
      display: inline-block;

      display: flex;
      align-items: center;

      a {
        color: var(--white);
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
