import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import styled from 'styled-components'
import getFormData from 'get-form-data'

import { Match } from '../../../components'
import { Button, TextField } from '../../../components/Form'

class MatchEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultA: this.props.data.result.a,
      resultB: this.props.data.result.b
    }
  }

  onResultAChange(e) {
    const inputValue = e.currentTarget.value
    const value = inputValue ? Number(inputValue) : null

    this.setState({ resultA: value })
  }

  onResultBChange(e) {
    const inputValue = e.currentTarget.value
    const value = inputValue ? Number(inputValue) : null

    this.setState({ resultB: value })
  }

  render() {
    const { data, editMatch, loading } = this.props
    const { resultA, resultB } = this.state
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
            renderPenaltyField({ groupPhase, resultA, resultB }) ? (
              <TextField
                name="resultPenaltyA"
                defaultValue={result.aPenalties}
              />
            ) : null
          }
          resultPenaltyB={
            renderPenaltyField({ groupPhase, resultA, resultB }) ? (
              <TextField
                name="resultPenaltyB"
                defaultValue={result.bPenalties}
              />
            ) : null
          }
        />

        <SaveContainer justify="flex-end">
          <Button type="submit" disabled={loading}>
            Zapisz
          </Button>
        </SaveContainer>
      </form>
    )
  }
}

const renderPenaltyField = ({ groupPhase, resultA, resultB }) => {
  if (groupPhase) {
    return false
  }

  if (resultA === null || resultB === null) {
    return false
  }

  return resultA === resultB
}

const SaveContainer = styled(Flex)`
  margin: 20px 0;
`

export default MatchEditForm
