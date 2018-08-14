import { injectGlobal } from 'styled-components'
import 'react-sticky-table/dist/react-sticky-table.css'
import 'rodal/lib/rodal.css'
import 'react-toastify/dist/ReactToastify.css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&subset=latin-ext');

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

  .Toast__body {
    white-space: nowrap;
  }
`
