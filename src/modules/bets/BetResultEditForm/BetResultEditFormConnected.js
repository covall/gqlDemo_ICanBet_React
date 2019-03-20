import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import BetResultEditForm from './BetResultEditForm'
import getErrorMessages from '../../../utils/getErrorMessages'
import { showError, showSuccess } from '../../../utils/toast'

const MAKE_BET = gql`
  mutation MakeBet($betNumbers: BetInput!, $gamblerId: ID!, $gameId: ID!) {
    makeBet(betInput: $betNumbers, gameId: $gameId, gamblerId: $gamblerId) {
      id
      betNumbers {
        a
        b
        winInPenalties
      }
      points
    }
  }
`

const BetResultEditFormConnectedToGQL = props => (
  <Mutation
    mutation={MAKE_BET}
    onError={error => {
      const messages = getErrorMessages(error)
      const genericMessage = 'Ups, coś poszło nie tak!'

      showError(messages || genericMessage)
    }}
    onCompleted={() => {
      showSuccess('Obstawiono wynik.')

      props.onCompleted()
    }}
  >
    {(mutate, { loading }) => (
      <BetResultEditForm
        {...props}
        loading={loading}
        makeBet={(gameId, gamblerId, betNumbers) => {
          mutate({
            variables: { gameId, gamblerId, betNumbers }
          })
        }}
      />
    )}
  </Mutation>
)

export default BetResultEditFormConnectedToGQL
