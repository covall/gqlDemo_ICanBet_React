import React, { Component, Fragment } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'

import { Match } from '../../../components'
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
          width={410}
          title="Edytuj wynik"
          visible={this.state.editMode}
          onCancel={() => this.toggleEditMode(false)}
          footer={null}
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
