import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import styled from 'styled-components'
import getFormData from 'get-form-data'

import { Button, TextField } from '../../../Form'
import Match from '../../../Match'

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
    const { data, editMatch, onComplete } = this.props
    const { id, date, phase, group, teamA, teamB, result } = data
    const groupPhase = phase === 'Grupa'

    return (
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()

          const formData = getFormData(e.currentTarget)

          editMatch(id, {
            a: Number(formData.resultA),
            b: Number(formData.resultB),
            aPenalties: formData.resultPenaltyA
              ? Number(formData.resultPenaltyA)
              : null,
            bPenalties: formData.resultPenaltyB
              ? Number(formData.resultPenaltyB)
              : null
          })

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
            !groupPhase && (
              <TextField
                name="resultPenaltyA"
                defaultValue={result.aPenalties}
              />
            )
          }
          resultPenaltyB={
            !groupPhase && (
              <TextField
                name="resultPenaltyB"
                defaultValue={result.bPenalties}
              />
            )
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
