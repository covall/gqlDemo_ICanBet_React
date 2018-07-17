import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&subset=latin-ext');

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;
