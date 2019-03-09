import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import getFormData from 'get-form-data'
import styled from 'styled-components'
import { Button, Input as InputComponent, InputNumber } from 'antd'

import { Match } from '../../../components'

class BetResultEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultA: this.props.bet.betNumbers.a,
      resultB: this.props.bet.betNumbers.b
    }
  }

  onResultAChange(value) {
    this.setState({ resultA: value })
  }

  onResultBChange(value) {
    this.setState({ resultB: value })
  }

  render() {
    const { bet, game, makeBet, loading } = this.props
    const { resultA, resultB } = this.state
    const groupPhase = game.phase === 'Grupa'

    return (
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()

          const formData = getFormData(e.currentTarget)
          const betNumbers = {
            a: Number(formData.resultA),
            b: Number(formData.resultB),
            winInPenalties: formData.winInPenalties
          }
          const gameId = Number(game.id)

          makeBet(gameId, bet.gambler.id, betNumbers)
        }}
      >
        <Match
          date={game.date}
          phase={game.phase}
          group={game.teamA.group}
          teamACode={game.teamA.code}
          teamAName={game.teamA.name}
          teamBCode={game.teamB.code}
          teamBName={game.teamB.name}
          resultA={
            <InputNumber
              name="resultA"
              defaultValue={bet.betNumbers.a}
              onChange={value => this.onResultAChange(value)}
            />
          }
          resultB={
            <InputNumber
              name="resultB"
              defaultValue={bet.betNumbers.b}
              onChange={value => this.onResultBChange(value)}
            />
          }
        />

        {resultA === resultB &&
          !groupPhase && (
            <WinInPenaltiesContainer align="center">
              <WinInPenaltiesText>
                Wygrany w rzutach karnych:
              </WinInPenaltiesText>
              <Input
                name="winInPenalties"
                defaultValue={bet.betNumbers.winInPenalties}
              />
            </WinInPenaltiesContainer>
          )}

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

const Input = styled(InputComponent)`
  width: 50px;
`

const SaveContainer = styled(Flex)`
  margin-top: 20px;
`

const WinInPenaltiesContainer = styled(Flex)`
  margin-top: 50px;
`

const WinInPenaltiesText = styled(Flex)`
  margin-right: 9px;
  font-size: 13px;
`

export default BetResultEditForm
