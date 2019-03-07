import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const AppMenu = ({ children, location }) => (
  <Menu selectedKeys={[location.pathname]} mode="horizontal" theme="dark">
    {children}
  </Menu>
)

export const MenuItem = Menu.Item
export default withRouter(AppMenu)
