import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const MenuLink = styled(NavLink).attrs({
  activeClassName: 'nav-item-active'
})`
  color: #000;
  opacity: .2;
  text-decoration: none;
  margin: 0 38px;

  &.nav-item-active {
    opacity: 1;
  }
`

export default MenuLink
