import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { Match, Modal } from '../../../components'
import MatchEditForm from '../MatchEditForm'

class MatchElement extends Component {
  state = {
    editMode: false
  }

  toggleEditMode(mode) {
    this.setState({
      editMode: mode
    })
  }

  render() {
    const { data } = this.props

    return (
      <Fragment>
        <MatchContainer
          onClick={() => this.toggleEditMode(true)}
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
          visible={this.state.editMode}
          onClose={() => this.toggleEditMode(false)}
          width={320}
          height={120}
          key={`editResult-${data.id}-${Math.random()}`}
          title="Edytuj wynik"
        >
          <MatchEditForm
            data={data}
            onCompleted={() => this.toggleEditMode(false)}
          />
        </Modal>
      </Fragment>
    )
  }
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
