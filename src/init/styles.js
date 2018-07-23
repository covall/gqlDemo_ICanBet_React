import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import 'react-sticky-table/dist/react-sticky-table.css'
import 'rodal/lib/rodal.css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&subset=latin-ext');

  ${reset}

  body {
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
