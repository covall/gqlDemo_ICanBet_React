import React, { Component } from 'react'
import styled from 'styled-components'

class TextField extends Component {
  render() {
    const { name, ...rest } = this.props
    return <TextInput type="number" name={name} {...rest} />
  }
}

const TextInput = styled.input`
  width: 20px;
  padding: 3px;
  font-size: 16px;
  border: 1px solid #d7d7d7;
  outline: none;
  text-align: center;

  &:focus {
    border-color: #000;
  }
`

export default TextField
