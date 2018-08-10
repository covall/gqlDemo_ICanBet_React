import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { withMedia } from 'react-media-query-hoc'

const MenuLink = withMedia(styled(NavLink).attrs({
  activeClassName: 'nav-item-active'
})`
  color: #000;
  opacity: 0.2;
  text-decoration: none;
  text-align: center;
  margin: 0 ${props => (props.media.mobile ? 0 : 38)}px;
  width: ${props => props.media.mobile && '33.333%'};

  &.nav-item-active {
    opacity: 1;
  }
`)

export default MenuLink
