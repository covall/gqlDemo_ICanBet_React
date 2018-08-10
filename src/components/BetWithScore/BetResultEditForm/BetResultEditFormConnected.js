import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import BetResultEditForm from './BetResultEditForm'
import { BETS_QUERY } from '../../BetsPage'
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
    onError={() => showError('Ups, coś poszło nie tak!')}
    onCompleted={() => showSuccess('WOW! Udało Ci się obstawić wynik.')}
  >
    {mutate => (
      <BetResultEditForm
        {...props}
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
