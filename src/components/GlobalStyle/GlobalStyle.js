import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&subset=latin-ext');
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    overflow: hidden;
  }
  
  input[type="number"] {
    appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }
`

export default GlobalStyle
