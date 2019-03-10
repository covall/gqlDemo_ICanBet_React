import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const AppMenu = React.memo(({ children, location }) => (
  <Menu
    selectedKeys={[location.pathname]}
    mode="horizontal"
    theme="dark"
    style={{ display: 'flex', justifyContent: 'center' }}
  >
    {children}
  </Menu>
))

export const MenuItem = Menu.Item
export default withRouter(AppMenu)
