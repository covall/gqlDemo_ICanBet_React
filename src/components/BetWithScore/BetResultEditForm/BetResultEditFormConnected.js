import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import BetResultEditForm from './BetResultEditForm'

const MAKE_BET = gql`
  mutation($bet: BetInput!, $gamblerId: ID!, $gameId: ID!) {
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

const BetResultEditFormConnectedToGQL = props => (
  <Mutation mutation={MAKE_BET}>
    {(makeBet, { data }) => <BetResultEditForm {...props} makeBet={makeBet} />}
  </Mutation>
)

export default BetResultEditFormConnectedToGQL
