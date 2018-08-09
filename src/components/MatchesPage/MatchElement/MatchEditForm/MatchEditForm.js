import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import styled from 'styled-components'

import { Button, TextField } from '../../../Form/index'
import Match from '../../../Match/index'

class MatchEditForm extends Component {
  onResultAChange(e) {
    const value = Number(e.currentTarget.value)

    this.setState({ resultA: value })
  }

  onResultBChange(e) {
    const value = Number(e.currentTarget.value)

    this.setState({ resultB: value })
  }

  render() {
    const { data, onComplete } = this.props
    const { date, phase, group, teamA, teamB, result } = data

    return (
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()

          onComplete()
        }}
      >
        <Match
          date={date}
          phase={phase}
          group={group}
          teamACode={teamA.code}
          teamAName={teamA.name}
          teamBCode={teamB.code}
          teamBName={teamB.name}
          resultA={
            <TextField
              name="resultA"
              defaultValue={result.a}
              onChange={e => this.onResultAChange(e)}
            />
          }
          resultB={
            <TextField
              name="resultB"
              defaultValue={result.b}
              onChange={e => this.onResultBChange(e)}
            />
          }
          resultPenaltyA={
            <TextField name="resultPenaltyA" defaultValue={result.aPenalties} />
          }
          resultPenaltyB={
            <TextField name="resultPenaltyB" defaultValue={result.bPenalties} />
          }
        />

        <SaveContainer justify="flex-end">
          <Button type="submit">Zapisz</Button>
        </SaveContainer>
      </form>
    )
  }
}

const SaveContainer = styled(Flex)`
  margin: 20px 0;
`

export default MatchEditForm
