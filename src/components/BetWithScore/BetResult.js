import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox'

import Modal from '../Modal'
import Match from '../Match'
import TextField from '../Form/TextField'
import Button from '../Form/Button'

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
    const { children, className, game } = this.props

    return (
      <Fragment>
        <div
          className={className}
          onClick={() => this.toggleEditMode(true)}
          title="Kliknij, aby edytować"
        >
          {children}
        </div>

        <Modal
          visible={this.state.editMode}
          onClose={() => this.toggleEditMode(false)}
          width={320}
          height={120}
          title="Edytuj wynik"
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
              <TextField name="resultA" defaultValue={game.result.a} autoFocus />
            }
            resultB={<TextField name="resultB" defaultValue={game.result.b} />}
            resultPenaltyA={
              <TextField name="resultPenaltyA" defaultValue={game.result.aPenalty} />
            }
            resultPenaltyB={
              <TextField name="resultPenaltyB" defaultValue={game.result.bPenalty} />
            }
          />

          <Flex justify="flex-end">
            <Button>Zapisz</Button>
          </Flex>
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
