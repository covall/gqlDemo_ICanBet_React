import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Modal } from 'antd'

import BetResultEditForm from '../BetResultEditForm'

class BetResult extends Component {
  state = {
    editMode: false
  }

  toggleEditMode(mode) {
    this.setState({
      editMode: mode
    })
  }

  render() {
    const { bet, game, className } = this.props
    const resultA = bet.betNumbers.a
    const resultB = bet.betNumbers.b
    const penaltyWinner = bet.betNumbers.winInPenalties

    return (
      <Fragment>
        <div
          className={className}
          onClick={() => this.toggleEditMode(true)}
          title="Kliknij, aby edytować"
        >
          {resultA} : {resultB}
          {penaltyWinner && ` (${penaltyWinner})`}
        </div>

        <Modal
          width={410}
          title="Edytuj zakład"
          visible={this.state.editMode}
          onCancel={() => this.toggleEditMode(false)}
          footer={null}
        >
          <BetResultEditForm
            bet={bet}
            game={game}
            onCompleted={() => this.toggleEditMode(false)}
          />
        </Modal>
      </Fragment>
    )
  }
}

export default styled(BetResult)`
  font-size: 16px;
  transition: transform 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`
