import React from 'react'
import styled from 'styled-components'

const Button = ({ children, className, ...rest }) => (
  <button className={className} {...rest}>
    {children}
  </button>
)

export default styled(Button)`
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  outline: none;
  font-size: 16px;
`
