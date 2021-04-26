import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #eee;
    --black: #000;

    --backgroundGray-100: #252525
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html: {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Mulish', sans-serif;
    line-height: 2.1;
    letter-spacing: .8px;
    word-wrap: break-word;
    font-weight: 400;
    background-color: #202022;
    color: #bbb;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  /* font-family: 'Mulish', sans-serif; */
  /* font-family: 'Montserrat', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */
`

export default GlobalStyles
