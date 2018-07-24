import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox'
import getFormData from 'get-form-data'

import Modal from '../../Modal/index'
import Match from '../../Match/index'
import TextField from '../../Form/TextField'
import Button from '../../Form/Button'

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
    const { makeBet, bet, game, className, onClick } = this.props
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
          title="Edytuj wynik"
        >
          <form
            onSubmit={e => {
              e.preventDefault()

              const formData = getFormData(e.currentTarget)
              let variables = {
                bet: {
                  a: formData.resultA,
                  b: formData.resultB
                },
                gameId: game.id,
                gamblerId: bet.gambler.id
              }

              if (formData.winInPenalties) {
                variables.winInPenalties = formData.winInPenalties
              }

              makeBet({
                variables
              })

              // hide modal
              this.setState({
                editMode: false
              })
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
              resultA={<TextField name="resultA" defaultValue={resultA} />}
              resultB={<TextField name="resultB" defaultValue={resultB} />}
              resultPenaltyA={
                <TextField name="winInPenalties" defaultValue={penaltyWinner} />
              }
              // TODO: zmienić
              resultPenaltyB={
                <TextField
                  name="resultPenaltyB"
                  defaultValue={game.result.bPenalties}
                />
              }
            />

            <Flex justify="flex-end">
              <Button onClick={onClick}>Zapisz</Button>
            </Flex>
          </form>
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
    transform: scale(1.5);
  }
`
