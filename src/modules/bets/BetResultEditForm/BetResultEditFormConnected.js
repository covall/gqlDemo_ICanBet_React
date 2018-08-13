import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import BetResultEditForm from './BetResultEditForm'
import { BETS_QUERY } from '../BetsPage'
import getErrorMessages from '../../../utils/getErrorMessages'
import { showError, showSuccess } from '../../../utils/toast'

const MAKE_BET = gql`
  mutation MakeBet($betNumbers: BetInput!, $gamblerId: ID!, $gameId: ID!) {
    makeBet(betInput: $betNumbers, gameId: $gameId, gamblerId: $gamblerId) {
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
      showSuccess('WOW! Udało Ci się obstawić wynik.')
      props.onCompleted()
    }}
  >
    {(mutate, result) => (
      <BetResultEditForm
        {...props}
        loading={result.loading}
        makeBet={(gameId, gamblerId, betNumbers) => {
          mutate({
            variables: { gameId, gamblerId, betNumbers },
            refetchQueries: [{ query: BETS_QUERY }]
          })
        }}
      />
    )}
  </Mutation>
)

export default BetResultEditFormConnectedToGQL
