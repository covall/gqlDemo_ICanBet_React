import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import Rodal from 'rodal'
import styled from 'styled-components'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
  constructor(props) {
    super(props)

    this.modalContainer = document.createElement('div')
    this.state = {
      editMode: false
    }
  }

  componentDidMount() {
    modalRoot.appendChild(this.modalContainer)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modalContainer)
  }

  render() {
    const { children, title, ...rodalProps } = this.props

    return createPortal(
      <Rodal closeOnEsc {...rodalProps}>
        <Title>{title}</Title>
        {children}
      </Rodal>,
      this.modalContainer
    )
  }
}

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`

export default Modal
