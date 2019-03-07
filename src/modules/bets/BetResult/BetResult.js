import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Modal } from 'antd'

import BetResultEditForm from '../BetResultEditForm'

const BetResult = ({ bet, game, className }) => {
  const resultA = bet.betNumbers.a
  const resultB = bet.betNumbers.b
  const penaltyWinner = bet.betNumbers.winInPenalties

  const [editMode, toggleEditMode] = useState(false)

  return (
    <Fragment>
      <div
        className={className}
        onClick={() => toggleEditMode(true)}
        title="Kliknij, aby edytować"
      >
        {resultA} : {resultB}
        {penaltyWinner && ` (${penaltyWinner})`}
      </div>

      <Modal
        title="Edytuj zakład"
        visible={editMode}
        onCancel={() => toggleEditMode(false)}
        footer={null}
      >
        <BetResultEditForm
          bet={bet}
          game={game}
          onCompleted={() => toggleEditMode(false)}
        />
      </Modal>
    </Fragment>
  )
}

export default styled(BetResult)`
  font-size: 16px;
  transition: transform 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`
