import React from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox'

import MenuLink from './MenuLink'

const Menu = ({ children, className }) => (
  <Flex align="center" justify="center" className={className}>
    {children}
  </Flex>
)

Menu.Item = MenuLink

export default styled(Menu)`
  height: 66px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
`
