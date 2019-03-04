import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const AppMenu = ({ children, location }) => (
  <Menu selectedKeys={[location.pathname]} mode="horizontal" theme="dark">
    {children}
  </Menu>
)

AppMenu.Item = Menu.Item

export default withRouter(AppMenu)
