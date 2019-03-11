import React, { Fragment, useState } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'

import { Match } from '../../../components'
import MatchEditForm from '../MatchEditForm'

const MatchElement = ({ data }) => {
  const [editMode, toggleEditMode] = useState(false)

  return (
    <Fragment>
      <MatchContainer
        onClick={() => toggleEditMode(true)}
        title="Kliknij, aby edytować wynik"
      >
        <Match
          date={data.date}
          phase={data.phase}
          group={data.teamA.group}
          teamACode={data.teamA.code}
          teamAName={data.teamA.name}
          teamBCode={data.teamB.code}
          teamBName={data.teamB.name}
          resultA={data.result.a}
          resultB={data.result.b}
          resultPenaltyA={data.result.aPenalties}
          resultPenaltyB={data.result.bPenalties}
          large
        />
      </MatchContainer>

      <Modal
        width={425}
        title="Edytuj wynik"
        visible={editMode}
        onCancel={() => toggleEditMode(false)}
        footer={null}
        centered
      >
        <MatchEditForm data={data} onCompleted={() => toggleEditMode(false)} />
      </Modal>
    </Fragment>
  )
}

const MatchContainer = styled.div`
  margin-bottom: 30px;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

export default MatchElement
