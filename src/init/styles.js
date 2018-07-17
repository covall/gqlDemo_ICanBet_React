import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}
  
  body {
    font-family: Helvetica;
  }
`;
