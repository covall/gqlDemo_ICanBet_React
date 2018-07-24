import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import BetResult from './BetResult'

const MAKE_BET = gql`
  mutation ($bet: BetInput!, $gamblerId: ID!, $gameId: ID!) {
    makeBet(betInput: $bet, gameId: $gameId, gamblerId: $gamblerId) {
      betNumbers {
        a
        b
        winInPenalties
      }
      points
    }
  }
`

const BetResultConnectedToGQL = props => (
  <Mutation mutation={MAKE_BET}>
    {(makeBet, { data }) => <BetResult {...props} makeBet={makeBet} />}
  </Mutation>
)

export default BetResultConnectedToGQL
