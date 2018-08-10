import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Modal from '../../Modal'
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
          visible={this.state.editMode}
          onClose={() => this.toggleEditMode(false)}
          width={320}
          height={120}
          title="Edytuj zakład"
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
