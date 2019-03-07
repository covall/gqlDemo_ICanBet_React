import React, { Component } from 'react'
import { Button } from 'antd'
import { Flex } from 'reflexbox'
import styled from 'styled-components'
import getFormData from 'get-form-data'
import { InputNumber } from 'antd'

import { Match } from '../../../components'

class MatchEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultA: this.props.data.result.a,
      resultB: this.props.data.result.b
    }
  }

  onResultAChange(inputValue) {
    const value = inputValue ? Number(inputValue) : null

    this.setState({ resultA: value })
  }

  onResultBChange(inputValue) {
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
            <InputNumber
              name="resultA"
              defaultValue={result.a}
              onChange={value => this.onResultAChange(value)}
            />
          }
          resultB={
            <InputNumber
              name="resultB"
              defaultValue={result.b}
              onChange={value => this.onResultBChange(value)}
            />
          }
          resultPenaltyA={
            shouldRenderPenaltyField({ groupPhase, resultA, resultB }) ? (
              <InputNumber
                name="resultPenaltyA"
                defaultValue={result.aPenalties}
              />
            ) : null
          }
          resultPenaltyB={
            shouldRenderPenaltyField({ groupPhase, resultA, resultB }) ? (
              <InputNumber
                name="resultPenaltyB"
                defaultValue={result.bPenalties}
              />
            ) : null
          }
        />

        <SaveContainer justify="flex-end">
          <Button
            type="primary"
            disabled={loading}
            loading={loading}
            htmlType="submit"
          >
            Zapisz
          </Button>
        </SaveContainer>
      </form>
    )
  }
}

const shouldRenderPenaltyField = ({ groupPhase, resultA, resultB }) => {
  if (groupPhase) {
    return false
  }

  if (resultA === null || resultB === null) {
    return false
  }

  return resultA === resultB
}

const SaveContainer = styled(Flex)`
  margin-top: 40px;
`

export default MatchEditForm
